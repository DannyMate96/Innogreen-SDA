import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, enquirerType, supportNeed, message } = await req.json();

  if (!name || !email || !subject || !enquirerType || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Innogreen Contact Form <onboarding@resend.dev>",
    to: "arian@innogreen.net.au",
    bcc: "daniel@ezmate.ai",
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
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
