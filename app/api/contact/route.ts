import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch (parseError: unknown) {
      console.error("JSON Parse Error in /api/contact:", parseError);
      return NextResponse.json(
        { error: "Invalid form payload formatting. Please check your inputs and try again." },
        { status: 400 }
      );
    }

    const { fullName, businessEmail, countryCode, phoneNumber, message } = body;

    // 1. Server-side Validation
    const trimmedName = typeof fullName === "string" ? fullName.trim() : "";
    const trimmedEmail = typeof businessEmail === "string" ? businessEmail.trim() : "";
    const trimmedCountryCode = typeof countryCode === "string" ? countryCode.trim() : "";
    const trimmedPhone = typeof phoneNumber === "string" ? phoneNumber.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    // Full Name Validation
    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }
    if (trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Full name cannot exceed 100 characters." },
        { status: 400 }
      );
    }
    if (/^\d+$/.test(trimmedName)) {
      return NextResponse.json(
        { error: "Full name cannot contain only numbers." },
        { status: 400 }
      );
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Country Code Validation
    if (!trimmedCountryCode) {
      return NextResponse.json(
        { error: "Please select a valid country code." },
        { status: 400 }
      );
    }

    // Phone Number Validation
    const digitsOnly = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone || digitsOnly.length < 6 || digitsOnly.length > 15) {
      return NextResponse.json(
        { error: "Please enter a valid phone number (6 to 15 digits)." },
        { status: 400 }
      );
    }

    // Message Validation
    if (!trimmedMessage || trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 3000) {
      return NextResponse.json(
        { error: "Message cannot exceed 3000 characters." },
        { status: 400 }
      );
    }

    // Header Injection Guard
    if (/[\r\n]/.test(trimmedName) || /[\r\n]/.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid header characters detected." },
        { status: 400 }
      );
    }

    // 2. SMTP Environment Credentials Check
    const smtpHost = process.env.SMTP_HOST || process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || process.env.BREVO_SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER || process.env.BREVO_SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.BREVO_SMTP_PASSWORD;
    const adminEmail = process.env.EMAIL_TO || process.env.ADMIN_EMAIL || "mrsivagoram@gmail.com";
    const mailFromName = process.env.MAIL_FROM_NAME || "The Co HR";
    const mailFromEmail = process.env.EMAIL_FROM || process.env.MAIL_FROM_EMAIL || smtpUser || "nexloralabs@gmail.com";
    const isSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

    if (!smtpUser || !smtpPass) {
      console.warn("Brevo SMTP credentials (SMTP_USER / SMTP_PASSWORD) are not set in environment variables.");
    }

    // 3. Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const fullPhoneNumber = `${trimmedCountryCode} ${trimmedPhone}`;

    // 4. Premium Branded HTML Email Template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry — The Co HR</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f7fc; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #051332; padding: 32px 40px; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; tracking-tight: -0.5px;">The Co HR</h1>
                    <p style="margin: 4px 0 0 0; color: #60a5fa; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">People | Performance | Possibilities</p>
                  </td>
                  <td align="right">
                    <span style="background-color: rgba(0, 102, 255, 0.2); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.3); font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">New Website Enquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 36px 40px;">
              <h2 style="margin: 0 0 8px 0; color: #0f172a; font-size: 20px; font-weight: 700;">New Contact Form Submission</h2>
              <p style="margin: 0 0 28px 0; color: #64748b; font-size: 14px; line-height: 1.5;">A visitor has submitted a new inquiry through the official <strong>The Co HR</strong> website contact page.</p>

              <!-- Details Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px; overflow: hidden;">
                
                <!-- Full Name -->
                <tr>
                  <td width="35%" style="padding: 14px 18px; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0; background-color: #f1f5f9;">Full Name</td>
                  <td width="65%" style="padding: 14px 18px; font-size: 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">${escapeHtml(trimmedName)}</td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0; background-color: #f1f5f9;">Email Address</td>
                  <td style="padding: 14px 18px; font-size: 14px; font-weight: 600; color: #1E90FF; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
                    <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #1E90FF; text-decoration: none;">${escapeHtml(trimmedEmail)}</a>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 700; color: #475569; background-color: #f1f5f9;">Phone Number</td>
                  <td style="padding: 14px 18px; font-size: 14px; font-weight: 600; color: #0f172a; background-color: #ffffff;">${escapeHtml(fullPhoneNumber)}</td>
                </tr>
              </table>

              <!-- Message Area -->
              <div style="margin-bottom: 24px;">
                <label style="display: block; margin-bottom: 8px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</label>
                <div style="background-color: #f0f6ff; border-left: 4px solid #1E90FF; border-radius: 8px; padding: 18px 20px; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</div>
              </div>

              <!-- Action Callout -->
              <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px dashed #cbd5e1;">
                <a href="mailto:${escapeHtml(trimmedEmail)}?subject=Re:%20The%20Co%20HR%20Enquiry" style="display: inline-block; background-color: #1E90FF; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 102, 255, 0.25);">Reply to ${escapeHtml(trimmedName)}</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: #334155;">The Co HR</p>
              <p style="margin: 0 0 10px 0; font-size: 11px; color: #64748b;">People | Performance | Possibilities</p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">This email was automatically generated from a submission on the official <a href="https://thecohr.com" style="color: #1E90FF; text-decoration: none;">The Co HR website</a>.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 5. Send Mail
    await transporter.sendMail({
      from: `"${mailFromName}" <${mailFromEmail}>`,
      to: adminEmail,
      replyTo: `"${trimmedName}" <${trimmedEmail}>`,
      subject: `New Enquiry from ${trimmedName} — The Co HR`,
      html: htmlTemplate,
      text: `New Contact Form Submission\n\nFull Name: ${trimmedName}\nEmail: ${trimmedEmail}\nPhone Number: ${fullPhoneNumber}\n\nMessage:\n${trimmedMessage}\n\nSubmitted via The Co HR Website`,
    });

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error in /api/contact endpoint:", error);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}

// Utility function to escape HTML special characters to prevent XSS in email preview
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
