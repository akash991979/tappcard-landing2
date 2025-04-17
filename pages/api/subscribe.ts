import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Initialize Resend with the API key
const resend = new Resend('re_WiAzKcHi_HUBwPFuy3bEpLaL47uG1UgjT');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Akash @ TappCard.io <akash@tappcard.io>',
      to: email,
      subject: 'Welcome to TappCard Beta!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333;">Welcome to the TappCard Beta!</h1>
          <p>Hi there,</p>
          <p>I'm thrilled to welcome you to the TappCard beta program! Thank you for signing up and joining us on this journey.</p>
          <p>We're working hard to create a seamless experience for sharing your professional identity. As a beta user, you'll be among the first to experience our innovative digital business identity & connections.</p>
          <p>We'll be in touch soon with more details about your beta access. In the meantime, if you have any questions or feedback, please don't hesitate to reply to this email.</p>
          <p>Looking forward to revolutionizing the way we connect.</p>
          <p>Best regards,</p>
          <p><strong>Akash</strong><br>CEO & Founder<br>TappCard.io</p>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
} 