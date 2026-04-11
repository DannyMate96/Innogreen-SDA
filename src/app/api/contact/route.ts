import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server configuration error: missing API key" }, { status: 500 });
  }

  const { name, email, phone, subject, enquirerType, supportNeed, message } = await req.json();

  if (!name || !email || !subject || !enquirerType || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: "Innogreen Contact Form <onboarding@resend.dev>",
    to: "daniel@ezmate.ai",
    cc: "arian@innogreen.net.au",
    replyTo: email,
    subject: `[Innogreen Enquiry] ${subject} — ${name} (${enquirerType})`,
    text: `
Enquirer Type: ${enquirerType}${supportNeed ? `\nClient's Support Need: ${supportNeed}` : ""}
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}
    `.trim(),
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: "Failed to send message", detail: error }, { status: 500 });
  }

  console.log("Email sent:", data?.id);
  return NextResponse.json({ success: true });
}
