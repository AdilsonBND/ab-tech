"use client";

import React, { useState } from "react";
import { ChatBubbleLeftRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

type WhatsAppButtonProps = {
  lang: 'en' | 'pt';
};

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(true);
  const phoneNumber = "5544998329619";
  const message = lang === 'pt' 
    ? "Olá! Gostaria de saber mais sobre seus serviços de desenvolvimento." 
    : "Hello! I would like to know more about your development services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="group relative border border-white/10 hover:border-white/10 hover:bg-white/5 rounded-2xl px-4 py-2 bg-transparent transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center gap-2 min-w-[200px]"
        aria-label={lang === 'pt' ? "Exemplo de Agente" : "Agent Example"}
        title={lang === 'pt' ? "Exemplo de Agente" : "Agent Example"}
      >
        <ChatBubbleLeftRightIcon className="w-5 h-5 flex-shrink-0" />
        
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold">
            {lang === 'pt' ? "Exemplo de Agente" : "Agent Example"}
          </span>
          <span className="text-xs opacity-90">
            {lang === 'pt' ? "( Momentaneamente offline )" : "( Momentarily offline )"}
          </span>
        </div>
        
        <div 
          onClick={handleClose}
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500/30 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 animate-pulse"
          role="button"
          tabIndex={0}
          aria-label={lang === 'pt' ? "Fechar" : "Close"}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClose(e);
            }
          }}
        >
          <XMarkIcon className="w-3 h-3 text-white" />
        </div>
      </button>
    </div>
  );
}
