export const SITE_NAME = 'Trustline Professional Services Ltd';

/** Primary domain contact — update NEXT_PUBLIC_SITE_URL in production for accurate OG URLs */
export const CONTACT_EMAIL = 'support@trustlineprofessional.com';

export const PHONE_DISPLAY = '+234 706 686 8867';
export const PHONE_E164 = '2347066868867';

export const WHATSAPP_PREFILL_MESSAGE =
  'Hello Trustline, I would like to inquire about tax compliance services.';

export function getWhatsAppUrl(message: string = WHATSAPP_PREFILL_MESSAGE): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trustlineprofessional.com';
