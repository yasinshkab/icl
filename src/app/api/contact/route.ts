import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, subject, message } = body as Record<string, any>;

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SENDGRID_FROM = process.env.SENDGRID_FROM || "info@icl.ly";
    const SENDGRID_TO = process.env.SENDGRID_TO || "info@icl.ly";

    // If no API key is provided, fallback to logging and return success
    if (!SENDGRID_API_KEY) {
      console.log("Contact form (no sendgrid):", { name, company, email, phone, subject, message });
      return NextResponse.json({ ok: true, info: "logged" }, { status: 200 });
    }

    const mailBody = {
      personalizations: [
        {
          to: [{ email: SENDGRID_TO }],
          subject: `ICL Website Contact - ${subject || "Inquiry"}`,
        },
      ],
      from: { email: SENDGRID_FROM },
      content: [
        {
          type: "text/plain",
          value: `Name: ${name || "-"}\nCompany: ${company || "-"}\nEmail: ${email || "-"}\nPhone: ${phone || "-"}\nSubject: ${subject || "-"}\n\nMessage:\n${message || "-"}`,
        },
      ],
    };

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailBody),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("SendGrid error:", text);
      return NextResponse.json({ ok: false, error: text }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
