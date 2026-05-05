import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbys01A346geMNLHiRZNR2bO5FtdKtOxzbRmiYchbmfG6N2Fb76FtpTPuJiZ-FPiqV8/exec";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, email, address } = body;

  if (!name || !phone || !address) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const results = await Promise.allSettled([
    // 1) Google Sheets (existing)
    fetch(SHEETS_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, phone, address }),
    }),

    // 2) Email backup via Resend
    resend.emails.send({
      from: "Innogreen Seniors Lead <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "daniel@ezmate.ai",
      subject: `[Seniors Lead] ${name}`,
      text: [
        `Name:    ${name}`,
        `Phone:   ${phone}`,
        `Email:   ${email || "Not provided"}`,
        `Address: ${address}`,
      ].join("\n"),
    }),
  ]);

  const sheetsOk = results[0].status === "fulfilled";
  const emailOk  = results[1].status === "fulfilled";

  if (!sheetsOk) {
    console.error("Sheets write failed:", (results[0] as PromiseRejectedResult).reason);
  }
  if (!emailOk) {
    console.error("Resend email failed:", (results[1] as PromiseRejectedResult).reason);
  }

  // Succeed if at least one destination saved the lead
  if (sheetsOk || emailOk) {
    return NextResponse.json({ success: true, sheets: sheetsOk, email: emailOk });
  }

  return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
}
