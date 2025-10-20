import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/mock';

const WhatsAppButton = () => {
  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;