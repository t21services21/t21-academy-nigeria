import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, fullName, name, email, phone, pathway, experience, location, hearAbout, subject, message } = body;

    const isApplication = type === "application";
    const senderName = fullName || name || "Unknown";
    const sendgridKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || "admin@t21services.co.uk"; // SendGrid verified sender
    const toEmail = "admin@t21services.com.ng"; // Always deliver to Nigeria inbox

    const emailSubject = isApplication
      ? `New Training Application — ${senderName} (${pathway || "Pathway TBC"})`
      : `New Academy Enquiry — ${subject || "General"} from ${senderName}`;

    const adminHtml = isApplication
      ? `
        <html><body style="font-family:Arial,sans-serif;color:#333;">
          <h2 style="color:#D4AF37;">NEW TRAINING APPLICATION — T21 Academy Nigeria</h2>
          <p><strong>Full Name:</strong> ${senderName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Location:</strong> ${location || "Not provided"}</p>
          <p><strong>Pathway:</strong> ${pathway || "Not specified"}</p>
          <p><strong>Experience Level:</strong> ${experience || "Not provided"}</p>
          <p><strong>Heard About Us:</strong> ${hearAbout || "Not provided"}</p>
          <p><strong>Why they want to train:</strong><br>${message || "Not provided"}</p>
          <hr/><p style="font-size:12px;color:#666;">Submitted via academy.t21services.com.ng</p>
        </body></html>`
      : `
        <html><body style="font-family:Arial,sans-serif;color:#333;">
          <h2 style="color:#D4AF37;">NEW ENQUIRY — T21 Academy Nigeria</h2>
          <p><strong>Name:</strong> ${senderName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Enquiry Type:</strong> ${subject || "General"}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <hr/><p style="font-size:12px;color:#666;">Submitted via academy.t21services.com.ng</p>
        </body></html>`;

    if (sendgridKey) {
      try {
        await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: { Authorization: `Bearer ${sendgridKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: toEmail }] }],
            from: { email: fromEmail, name: "T21 Academy Nigeria" },
            reply_to: { email },
            subject: emailSubject,
            content: [{ type: "text/html", value: adminHtml }],
          }),
        });
      } catch (emailErr) {
        console.error("SendGrid error:", emailErr);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
