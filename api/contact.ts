import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  // Support POST method only
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message, honeypot } = req.body || {};

  // Reject bot honeypot submission
  if (honeypot) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'burlokh23@gmail.com';

  if (!apiKey) {
    return res.status(500).json({
      error: 'Resend API key is not configured on the server.',
    });
  }

  const resend = new Resend(apiKey);

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipient],
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0; font-size: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">New Portfolio Message</h2>
          <p style="margin: 8px 0; color: #475569;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 8px 0; color: #475569;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #7C8CFF;">
            <p style="margin: 0; color: #1e293b; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">Sent from Burhanuddin Lokhandwala's Portfolio Contact Form.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return res.status(500).json({
      error: error.message || 'Failed to send email via Resend.',
    });
  }
}

