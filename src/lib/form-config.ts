/**
 * Whether the contact form can really deliver messages.
 *
 * On any Vercel deployment the form needs email delivery (Resend) and spam
 * protection (Turnstile). Without them the contact page shows direct contact
 * details instead, so a visitor is never told a message was sent when it was not.
 * Locally the form always renders and submissions are printed to the terminal.
 */
export const onVercel = Boolean(process.env.VERCEL);

export const emailConfigured = Boolean(
  process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL,
);

export const spamCheckConfigured = Boolean(
  process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
);

export const contactFormReady = !onVercel || (emailConfigured && spamCheckConfigured);
