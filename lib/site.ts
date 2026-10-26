export const SITE_NAME = 'Trustline Professional Services Ltd';

/** Primary domain contact — update NEXT_PUBLIC_SITE_URL in production for accurate OG URLs */
export const CONTACT_EMAIL = 'support@trustlineprofessional.com';

export const PHONE_DISPLAY = '+234 706 686 8867';
export const PHONE_E164 = '2347066868867';

export const WHATSAPP_PREFILL_MESSAGE =
  "Hello Trustline, I'd like to book an HR & Compliance Diagnostic for my business.";

export function getWhatsAppUrl(message: string = WHATSAPP_PREFILL_MESSAGE): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trustlineprofessional.com';

/** Google Preferred Source Configuration */
export const GOOGLE_PREFERRED_CONFIG = {
  searchQueryUrl: 'https://www.google.com/search?q=site%3Atrustlineprofessional.com+HR+tax+payroll+compliance+Nigeria',
  googleNewsFollowUrl: 'https://news.google.com/publications/trustline-professional-services',
  siteDomain: 'trustlineprofessional.com',
};

/**
 * Hero Media Configuration
 * Switch between 'interactive' (live terminal card), 'video' (MP4 / WebM), or 'gif'.
 * To swap the video anytime, simply place your video file in /public/videos/ and update videoSrc below!
 */
export const HERO_MEDIA_CONFIG = {
  type: 'interactive' as 'interactive' | 'video' | 'gif',
  videoSrc: '/videos/hero-trustline.mp4',
  posterSrc: '/images/hero-poster.png',
  gifSrc: '/images/hero-preview.gif',
  badge: 'Live Workforce & Compliance Engine',
};
