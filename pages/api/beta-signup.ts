import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Initialize Resend with the API key
const resend = new Resend('re_WiAzKcHi_HUBwPFuy3bEpLaL47uG1UgjT');

// Simple in-memory rate limiting
// In a production environment, use Redis or another distributed store
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per minute
const ipRequestCount: Record<string, { count: number; resetTime: number }> = {};

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CORS headers for LLM access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed',
      allowed_methods: ['POST']
    });
  }

  // Get client IP for rate limiting
  const clientIp = req.headers['x-forwarded-for'] || 
                   req.socket.remoteAddress || 
                   'unknown';
  
  // Apply rate limiting
  const ipKey = Array.isArray(clientIp) ? clientIp[0] : clientIp;
  const now = Date.now();
  
  if (!ipRequestCount[ipKey]) {
    ipRequestCount[ipKey] = { count: 0, resetTime: now + RATE_LIMIT_WINDOW };
  }
  
  // Reset count if window has passed
  if (now > ipRequestCount[ipKey].resetTime) {
    ipRequestCount[ipKey] = { count: 0, resetTime: now + RATE_LIMIT_WINDOW };
  }
  
  // Increment count and check limit
  ipRequestCount[ipKey].count++;
  
  if (ipRequestCount[ipKey].count > RATE_LIMIT_MAX) {
    return res.status(429).json({ 
      success: false, 
      error: 'Too many requests, please try again later',
      retry_after: Math.ceil((ipRequestCount[ipKey].resetTime - now) / 1000)
    });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email is required',
        required_fields: ['email']
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email format',
        format: 'email@example.com'
      });
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
      return res.status(400).json({ 
        success: false, 
        error: error.message
      });
    }

    // Don't return sensitive data, just a success message
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully registered for TappCard beta. Check your email for confirmation.' 
    });
  } catch (error) {
    console.error('Error processing beta signup:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Server error processing your request' 
    });
  }
} 