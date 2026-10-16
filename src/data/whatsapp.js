// WhatsApp quick-inquiry helper.
// Number is in international wa.me format: country code + number, no "+" or spaces.
export const WHATSAPP_NUMBER = '8615826864369';

const SITE_ORIGIN = 'https://www.chiatyoutdoor.com';

// Generic message used by the homepage and the global floating button.
export const GENERIC_MESSAGE =
  "Hello Chiaty Outdoor, I'm interested in your outdoor furniture. Please send your catalogue and MOQ.";

// Product-specific message. Includes the product name and its absolute link.
export function productMessage(name, path) {
  const url = `${SITE_ORIGIN}${path}`;
  return `Hello Chiaty Outdoor, I'm interested in ${name}. Please send MOQ, price, catalogue and lead time. Product: ${url}`;
}

export function waHref(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Fire a GA4 event on click. Sends ONLY a non-personal placement label.
// Never sends the customer's name, phone, email, message, or prefilled text.
export function trackWhatsAppClick(placement) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', { placement });
  }
}
