import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CORS headers for LLM access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed',
      allowed_methods: ['GET']
    });
  }

  // Return machine-readable app metadata
  const metadata = {
    app_name: "TappCard.io",
    beta_access: true,
    fields: ["email"],
    rate_limit: "10 requests per minute",
    llm_instructions: "Submit email to join beta waitlist",
    endpoints: {
      beta_signup: {
        url: "/api/beta-signup",
        method: "POST",
        content_type: "application/json",
        required_fields: ["email"],
        validation: {
          email: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        }
      },
      discovery: {
        url: "/api/discovery",
        method: "GET"
      },
      documentation: {
        url: "/api-docs.json",
        method: "GET",
        format: "OpenAPI"
      }
    },
    schema_markup: {
      type: "WebPage",
      name: "Beta Sign-Up",
      description: "Join the future of professional connections"
    },
    service_description: "TappCard.io offers a modern digital business card solution for professionals.",
    contact: "info@tappcard.io"
  };

  return res.status(200).json(metadata);
} 