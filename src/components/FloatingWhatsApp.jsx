import React from 'react';
import { MessageCircle } from 'lucide-react';
import { GENERIC_MESSAGE, waHref, trackWhatsAppClick } from '../data/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      className="wa-float"
      href={waHref(GENERIC_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Us"
      onClick={() => trackWhatsAppClick('floating')}
    >
      <MessageCircle size={20} />
      <span>WhatsApp Us</span>
    </a>
  );
}
