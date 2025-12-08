import { NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";

const url = process.env.ZEPTOMAIL_API_URL;
const token = process.env.ZEPTOMAIL_API_TOKEN;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

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

    // Send email
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

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

