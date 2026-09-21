/**
 * Cloudflare Pages Function: contact form handler backed by Resend.
 *
 * Required environment variables in Cloudflare Pages:
 *   RESEND_API_KEY   - Resend API key
 *   RESEND_TO_EMAIL  - Recipient address
 *   RESEND_FROM_EMAIL - Verified sender address in Resend (e.g. 'Kontakt <kontakt@marekbrezik.cz>')
 *
 * On success the browser is redirected back to the homepage.
 * On failure it redirects back with an error flag.
 */

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = new URL(request.url).origin;

  const redirect = (status) => Response.redirect(`${origin}/?status=${status}#kontakt`, 303);

  try {
    const formData = await request.formData();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const website = String(formData.get('website') || '').trim(); // honeypot

    // Honeypot: if the hidden field is filled, silently accept but do nothing.
    if (website) {
      return redirect('success');
    }

    if (!name || !email || !message) {
      return redirect('missing');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return redirect('invalid');
    }

    const missing = [];
    if (!env.RESEND_API_KEY) missing.push('RESEND_API_KEY');
    if (!env.RESEND_TO_EMAIL) missing.push('RESEND_TO_EMAIL');
    if (!env.RESEND_FROM_EMAIL) missing.push('RESEND_FROM_EMAIL');

    if (missing.length > 0) {
      console.error('Missing environment variables:', missing.join(', '));
      return redirect('config');
    }

    const bodyLines = [`Jméno: ${name}`, `E-mail: ${email}`];
    if (phone) bodyLines.push(`Telefon: ${phone}`);
    bodyLines.push('', message);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: env.RESEND_TO_EMAIL,
        reply_to: email,
        subject: `Poptávka od ${name}`,
        text: bodyLines.join('\n'),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Resend API error:', res.status, text);
      return redirect('api');
    }

    return redirect('success');
  } catch (err) {
    console.error('Contact form error:', err);
    return redirect('api');
  }
}
