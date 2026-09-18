import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch (parseError: unknown) {
      console.error("JSON Parse Error in /api/newsletter:", parseError);
      return NextResponse.json(
        { error: "Invalid form payload formatting. Please try again." },
        { status: 400 }
      );
    }

    const { email } = body;
    const trimmedEmail = typeof email === "string" ? email.trim() : "";

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (trimmedEmail.length > 254) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }

    // Header Injection Guard
    if (/[\r\n]/.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid characters detected in email." },
        { status: 400 }
      );
    }

    // SMTP Credentials Check
    const smtpHost = process.env.SMTP_HOST || process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || process.env.BREVO_SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER || process.env.BREVO_SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.BREVO_SMTP_PASSWORD;
    const adminEmail = process.env.EMAIL_TO || process.env.ADMIN_EMAIL || "mrsivagoram@gmail.com";
    const mailFromName = process.env.MAIL_FROM_NAME || "The Co HR";
    const mailFromEmail = process.env.EMAIL_FROM || process.env.MAIL_FROM_EMAIL || smtpUser || "nexloralabs@gmail.com";
    const isSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

    if (smtpUser && smtpPass) {
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

      const escapeHtml = (str: string) =>
        str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");

      const escapedEmail = escapeHtml(trimmedEmail);

      // Email 1: Notification to Admin
      const adminMailOptions = {
        from: `"${mailFromName}" <${mailFromEmail}>`,
        to: adminEmail,
        replyTo: trimmedEmail,
        subject: `📬 New Newsletter Subscriber: ${escapedEmail}`,
        text: `New Newsletter Subscription Request:\n\nEmail: ${trimmedEmail}\nDate: ${new Date().toLocaleString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 24px; color: #0f172a;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
              <div style="background-color: #1E90FF; padding: 20px 24px; color: #ffffff;">
                <h2 style="margin: 0; font-size: 18px; font-weight: 700;">📬 New Newsletter Subscription</h2>
              </div>
              <div style="padding: 24px;">
                <p style="font-size: 14px; margin-top: 0;">A new visitor has subscribed to receive updates from <strong>The Co HR</strong>.</p>
                <div style="background-color: #f1f5f9; border-radius: 8px; padding: 16px; margin: 16px 0;">
                  <p style="margin: 0; font-size: 14px;"><strong>Subscriber Email:</strong> <a href="mailto:${escapedEmail}" style="color: #1E90FF; text-decoration: none;">${escapedEmail}</a></p>
                  <p style="margin: 8px 0 0 0; font-size: 12px; color: #64748b;">Subscribed on: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
                </div>
              </div>
            </div>
          </div>
        `,
      };

      // Email 2: Welcome email to subscriber
      const subscriberMailOptions = {
        from: `"${mailFromName}" <${mailFromEmail}>`,
        to: trimmedEmail,
        subject: `Welcome to The Co HR Insights!`,
        text: `Thank you for subscribing to The Co HR newsletter. We'll keep you updated with the latest HR trends and corporate solutions.\n\nBest regards,\nThe Co HR Team\nhttps://www.thecohr.com`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 24px; color: #0f172a;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
              <div style="background-color: #1E90FF; padding: 24px; color: #ffffff; text-align: center;">
                <h2 style="margin: 0; font-size: 22px; font-weight: 700;">Welcome to The Co HR!</h2>
              </div>
              <div style="padding: 28px; font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Hello,</p>
                <p>Thank you for subscribing to <strong>The Co HR Insights</strong>. You will now be the first to receive our curated HR trends, compliance updates, enterprise HR tech innovations, and strategic workforce solutions delivered straight to your inbox.</p>
                <div style="margin: 24px 0; text-align: center;">
                  <a href="https://www.thecohr.com" style="background-color: #1E90FF; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; display: inline-block;">Explore Our Services</a>
                </div>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                <p style="font-size: 12px; color: #64748b; margin: 0;">The Co HR Private Limited | Hyderabad, India<br/>Phone: +91 90197 24365 | Email: info@thecohr.com</p>
              </div>
            </div>
          </div>
        `,
      };

      // Send both asynchronously
      await Promise.allSettled([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(subscriberMailOptions),
      ]);
    } else {
      console.warn("SMTP credentials missing. Newsletter subscription simulated successfully.");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to The Co HR newsletter!",
    });
  } catch (error: unknown) {
    console.error("Error in /api/newsletter endpoint:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
