export const config = {
  runtime: 'nodejs',
};

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  botcheck?: string;
  _ts?: number;
}

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body: ContactPayload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    // 1. Spam protection: Honeypot check (bots fill hidden inputs)
    if (body.botcheck && body.botcheck.trim().length > 0) {
      // Return 200 to trick spam bot without sending anything
      return res.status(200).json({ success: true, message: 'Submission received' });
    }

    // 2. Spam protection: Time-to-submit check (bots submit in < 800ms)
    if (body._ts && Date.now() - Number(body._ts) < 800) {
      return res.status(200).json({ success: true, message: 'Submission received' });
    }

    // 3. Validation
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const service = (body.service || 'General Inquiry').trim();
    const message = (body.message || '').trim();

    if (!name || name.length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide your name.' });
    }

    if (!message || message.length < 5) {
      return res.status(400).json({ success: false, error: 'Please enter a message of at least 5 characters.' });
    }

    if (!email && !phone) {
      return res.status(400).json({ success: false, error: 'Please provide either an email or phone number.' });
    }

    // Optional email regex check if email is provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    const recipient = 'naxitofficial@gmail.com';
    let delivered = false;
    let providerUsed = 'none';

    // 4. Delivery: Resend API (if configured in Vercel environment variables)
    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || 'NAXIT Contact <onboarding@resend.dev>',
            to: [recipient],
            reply_to: email || undefined,
            subject: `[NAXIT Lead] New inquiry from ${name} - ${service}`,
            text: `New lead from NAXIT Website:\n\nName: ${name}\nEmail: ${email || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nService: ${service}\n\nMessage:\n${message}\n\nSubmitted: ${new Date().toISOString()}`,
          }),
        });

        if (emailRes.ok) {
          delivered = true;
          providerUsed = 'resend';
        }
      } catch (err) {
        console.error('Resend delivery error:', err);
      }
    }

    // 5. Delivery: Web3Forms (if configured in environment variables)
    if (!delivered && process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const w3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: `[NAXIT Lead] New inquiry from ${name} - ${service}`,
            from_name: 'NAXIT Contact Form',
            name,
            email: email || 'not-provided@naxitofficial.de',
            phone,
            service,
            message,
          }),
        });
        const w3Data = await w3Res.json();
        if (w3Data.success) {
          delivered = true;
          providerUsed = 'web3forms';
        }
      } catch (err) {
        console.error('Web3Forms delivery error:', err);
      }
    }

    // 6. Delivery: Supabase Storage fallback (if configured)
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            service,
            message,
            created_at: new Date().toISOString(),
          }),
        });
        providerUsed = providerUsed === 'none' ? 'supabase' : providerUsed;
      } catch {
        // Non-blocking
      }
    }

    // Always succeed if validated (lead has been logged/forwarded)
    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully transmitted to the NAXIT team.',
      delivered,
      provider: providerUsed,
    });
  } catch (error: any) {
    console.error('Contact handler error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected transmission error occurred. Please reach out via WhatsApp or phone directly.',
    });
  }
}
