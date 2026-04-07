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

    const timestamp = new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos", dateStyle: "full", timeStyle: "short" });

    const emailHeader = `
      <div style="background:#000;padding:28px 32px;text-align:center;">
        <p style="margin:0;font-size:20px;font-weight:900;color:#D4AF37;font-family:Georgia,serif;letter-spacing:1px;">T21 ACADEMY NIGERIA</p>
        <p style="margin:4px 0 0;font-size:11px;color:#999;letter-spacing:2px;text-transform:uppercase;">Part of T21 Global Group</p>
      </div>`;

    const emailFooter = `
      <div style="background:#111;padding:16px 32px;text-align:center;border-top:1px solid #333;">
        <p style="margin:0;font-size:11px;color:#666;">This notification was sent from <strong style="color:#D4AF37;">academy.t21services.com.ng</strong></p>
        <p style="margin:4px 0 0;font-size:11px;color:#555;">T21 Academy Nigeria &bull; admin@t21services.com.ng &bull; +234 816 377 5394</p>
        <p style="margin:4px 0 0;font-size:11px;color:#555;">Received: ${timestamp} (WAT)</p>
      </div>`;

    const row = (label: string, value: string) =>
      `<tr>
        <td style="padding:10px 16px;background:#1a1a1a;color:#999;font-size:12px;font-weight:700;text-transform:uppercase;width:35%;border-bottom:1px solid #2a2a2a;vertical-align:top;">${label}</td>
        <td style="padding:10px 16px;background:#111;color:#e0e0e0;font-size:13px;border-bottom:1px solid #2a2a2a;vertical-align:top;">${value || "<span style='color:#555;font-style:italic;'>Not provided</span>"}</td>
      </tr>`;

    const adminHtml = isApplication
      ? `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:600px;margin:24px auto;border:1px solid #2a2a2a;border-radius:8px;overflow:hidden;">
            ${emailHeader}
            <div style="background:#1a1a00;border-bottom:3px solid #D4AF37;padding:16px 32px;">
              <p style="margin:0;font-size:14px;font-weight:700;color:#D4AF37;text-transform:uppercase;letter-spacing:1px;">&#128203; New Training Application</p>
            </div>
            <div style="padding:24px 32px;background:#0d0d0d;">
              <table style="width:100%;border-collapse:collapse;border-radius:6px;overflow:hidden;">
                ${row("Full Name", senderName)}
                ${row("Email Address", `<a href="mailto:${email}" style="color:#D4AF37;">${email}</a>`)}
                ${row("Phone Number", phone ? `<a href="tel:${phone}" style="color:#D4AF37;">${phone}</a>` : "")}
                ${row("Location / State", location || "")}
                ${row("Career Pathway", `<strong style="color:#fff;">${pathway || ""}</strong>`)}
                ${row("Experience Level", experience || "")}
                ${row("Heard About Us", hearAbout || "")}
              </table>
              <div style="margin-top:20px;background:#111;border:1px solid #2a2a2a;border-left:4px solid #D4AF37;border-radius:4px;padding:16px;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:1px;">Why They Want to Train</p>
                <p style="margin:0;font-size:13px;color:#ccc;line-height:1.7;">${message || "<em style='color:#555;'>Not provided</em>"}</p>
              </div>
              <div style="margin-top:20px;text-align:center;">
                <a href="mailto:${email}?subject=Re: Your T21 Academy Application" style="display:inline-block;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#000;font-weight:700;font-size:13px;padding:12px 28px;border-radius:6px;text-decoration:none;">Reply to Applicant</a>
              </div>
            </div>
            ${emailFooter}
          </div>
        </body></html>`
      : `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:600px;margin:24px auto;border:1px solid #2a2a2a;border-radius:8px;overflow:hidden;">
            ${emailHeader}
            <div style="background:#001a00;border-bottom:3px solid #D4AF37;padding:16px 32px;">
              <p style="margin:0;font-size:14px;font-weight:700;color:#D4AF37;text-transform:uppercase;letter-spacing:1px;">&#128222; New Website Enquiry</p>
            </div>
            <div style="padding:24px 32px;background:#0d0d0d;">
              <table style="width:100%;border-collapse:collapse;border-radius:6px;overflow:hidden;">
                ${row("Name", senderName)}
                ${row("Email Address", `<a href="mailto:${email}" style="color:#D4AF37;">${email}</a>`)}
                ${row("Phone Number", phone ? `<a href="tel:${phone}" style="color:#D4AF37;">${phone}</a>` : "")}
                ${row("Enquiry Type", `<strong style="color:#fff;">${subject || "General"}</strong>`)}
              </table>
              <div style="margin-top:20px;background:#111;border:1px solid #2a2a2a;border-left:4px solid #D4AF37;border-radius:4px;padding:16px;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:1px;">Message</p>
                <p style="margin:0;font-size:13px;color:#ccc;line-height:1.7;">${message}</p>
              </div>
              <div style="margin-top:20px;text-align:center;">
                <a href="mailto:${email}?subject=Re: Your T21 Academy Enquiry" style="display:inline-block;background:linear-gradient(135deg,#D4AF37,#FFD700);color:#000;font-weight:700;font-size:13px;padding:12px 28px;border-radius:6px;text-decoration:none;">Reply to Enquiry</a>
              </div>
            </div>
            ${emailFooter}
          </div>
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
