'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true);

  // Replace with actual WhatsApp Business number
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971XXXXXXXXX';
  const defaultMessage = encodeURIComponent(
    'Hello! I\'m interested in learning more about SMERP TEK solutions.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-4"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap pr-2">
          Chat with us
        </span>
      </a>
    </div>
  );
}
