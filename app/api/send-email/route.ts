import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to yourself
    const data = await resend.emails.send({
      from: 'contact@resend.dev', // Resend default sender; you can customize after verifying your domain
      to: process.env.CONTACT_EMAIL || 'inyangidongesit22@gmail.com', // Your email
      replyTo: email, // Visitor's email (so you can reply directly)
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
