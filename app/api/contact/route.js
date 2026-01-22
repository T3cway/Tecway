import { NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";
import { Resend } from "resend";

const url = process.env.ZEPTOMAIL_API_URL;
const token = process.env.ZEPTOMAIL_API_TOKEN;
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Welcome email template
function createWelcomeEmailTemplate(customerName) {
  // Get site URL - API routes can't access NEXT_PUBLIC_ vars, so use regular env vars
  // Priority: SITE_URL > VERCEL_URL > fallback
  let siteUrl = process.env.SITE_URL;
  
  if (!siteUrl && process.env.VERCEL_URL) {
    siteUrl = `https://${process.env.VERCEL_URL}`;
  }
  
  if (!siteUrl) {
    // Fallback - you should set SITE_URL in your environment variables
    siteUrl = 'https://www.tecway.dev';
  }
  
  // Ensure URL doesn't end with a slash
  siteUrl = siteUrl.replace(/\/$/, '');
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Tecway</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #000000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #0C0C0D; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #0C0C0D 0%, #1a1a1a 100%);">
              <h1 style="margin: 0; color: #ea580c; font-size: 32px; font-weight: 300; letter-spacing: -0.5px;">Tecway</h1>
            </td>
          </tr>
          
          <!-- Thank You Section -->
          <tr>
            <td style="padding: 30px 40px;">
              <h2 style="margin: 0 0 20px; color: #ffffff; font-size: 24px; font-weight: 400;">Thank You, ${customerName}!</h2>
              <p style="margin: 0 0 20px; color: #a0a0a0; font-size: 16px; line-height: 1.6;">
                We're thrilled that you've reached out to us! Your interest means the world to us, and we're excited about the possibility of working together.
              </p>
              <p style="margin: 0 0 20px; color: #a0a0a0; font-size: 16px; line-height: 1.6;">
                Our team has received your message and will review it carefully. We'll get back to you within <strong style="color: #ea580c;">24-48 hours</strong> to discuss your project and how we can help bring your vision to life.
              </p>
            </td>
          </tr>
          
          <!-- Services Showcase -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h3 style="margin: 0 0 20px; color: #ffffff; font-size: 20px; font-weight: 400;">Our Services</h3>
              <p style="margin: 0 0 25px; color: #a0a0a0; font-size: 14px; line-height: 1.6;">
                While you wait, here's a glimpse of what we offer:
              </p>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 15px; background-color: #1a1a1a; border-left: 3px solid #ea580c; margin-bottom: 10px; cursor: pointer;">
                    <a href="${siteUrl}/projects?category=web" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
                      <h4 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 500;">🌐 Web Applications →</h4>
                      <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.5;">Robust, scalable web apps from MVPs to full-scale platforms</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;"></td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #1a1a1a; border-left: 3px solid #ea580c; cursor: pointer;">
                    <a href="${siteUrl}/projects?category=mobile" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
                      <h4 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 500;">📱 Mobile Applications →</h4>
                      <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.5;">Powerful iOS and Android apps designed for scale</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;"></td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #1a1a1a; border-left: 3px solid #ea580c; cursor: pointer;">
                    <a href="${siteUrl}/projects?category=chatbot" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
                      <h4 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 500;">💬 Chatbot Development →</h4>
                      <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.5;">Custom AI chat solutions for instant support and streamlined processes</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;"></td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #1a1a1a; border-left: 3px solid #ea580c; cursor: pointer;">
                    <a href="${siteUrl}/projects?category=infrastructure" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
                      <h4 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 500;">🏗️ System Setup & Architecture →</h4>
                      <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.5;">Scalable infrastructure and optimal performance configurations</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;"></td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #1a1a1a; border-left: 3px solid #ea580c; cursor: pointer;">
                    <a href="${siteUrl}/projects?category=uiux" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
                      <h4 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 500;">🎨 UI/UX Design →</h4>
                      <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.5;">Beautiful, intuitive interfaces that engage users and drive conversions</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;"></td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #1a1a1a; border-left: 3px solid #ea580c; cursor: pointer;">
                    <a href="${siteUrl}/projects?category=setup" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
                      <h4 style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 500;">⚙️ Enterprise Solutions →</h4>
                      <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.5;">Complete setup and configuration for enterprise infrastructure and custom software solutions</p>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Customer Care Section -->
          <tr>
            <td style="padding: 30px 40px; background-color: #1a1a1a; border-top: 1px solid #2a2a2a;">
              <h3 style="margin: 0 0 20px; color: #ffffff; font-size: 20px; font-weight: 400;">Customer Care</h3>
              <p style="margin: 0 0 15px; color: #a0a0a0; font-size: 14px; line-height: 1.6;">
                We're committed to providing exceptional service and support throughout your journey with us. If you have any urgent questions or need immediate assistance, please don't hesitate to reach out.
              </p>
              <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.6;">
                <strong style="color: #ffffff;">Email:</strong> <a href="mailto:m.abubaker@tecway.com" style="color: #ea580c; text-decoration: none;">m.abubaker@tecway.dev</a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background-color: #0C0C0D; border-top: 1px solid #2a2a2a;">
              <p style="margin: 0 0 10px; color: #666666; font-size: 14px; line-height: 1.6;">
                We look forward to working with you!
              </p>
              <p style="margin: 0; color: #666666; font-size: 12px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #ea580c;">The Tecway Team</strong>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request) {
  const submissionData = {
    timestamp: new Date().toISOString(),
  };

  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Store submission data for logging (even if email fails)
    submissionData.name = name;
    submissionData.email = email;
    submissionData.phone = phone;
    submissionData.subject = subject;
    submissionData.message = message;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log all contact form submissions for recovery purposes
    console.log("Contact form submission:", JSON.stringify(submissionData, null, 2));

    // Initialize ZeptoMail client
    const client = new SendMailClient({ url, token });

    // Format the email content
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c;">New Contact Form Submission</h2>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    // Send internal notification email via ZeptoMail
    await client.sendMail({
      from: {
        address: process.env.ZEPTOMAIL_FROM_EMAIL,
        name: process.env.ZEPTOMAIL_FROM_NAME,
      },
      to: [
        {
          email_address: {
            address: process.env.ZEPTOMAIL_TO_EMAIL,
            name: "Tecway Team",
          },
        },
      ],
      subject: `Contact Form: ${subject}`,
      htmlbody: htmlBody,
    });

    // Send welcome email to customer via Resend (non-blocking)
    if (resend && process.env.RESEND_FROM_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: email,
          subject: "Thank You for Contacting Tecway",
          html: createWelcomeEmailTemplate(name),
        });
        console.log("Welcome email sent successfully to:", email);
      } catch (resendError) {
        // Log error but don't fail the request
        console.error("Error sending welcome email via Resend:", {
          message: resendError.message,
          email: email,
        });
      }
    } else {
      console.warn("Resend API key or from email not configured. Skipping welcome email.");
    }

    console.log("Email sent successfully for:", email);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log the error along with submission data for recovery
    console.error("Error sending email - Submission data:", JSON.stringify(submissionData, null, 2));
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      details: error.details,
    });
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

