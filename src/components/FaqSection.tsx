import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, COURSE_PRICING } from '../data/courseData';

interface FaqSectionProps {
  onOpenChat: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenChat }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Preguntas <span className="text-[#F1A80A]">Frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Todo lo que necesitas saber antes de asegurar tu cupo y activar tu mes de asesoría.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white/5 border-[#F1A80A]/40 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </h3>
                  <div className="p-1.5 rounded-lg bg-white/5 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#F1A80A]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/10 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt -> open chatbot or WhatsApp */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-bold text-base">¿Tienes una pregunta específica sobre tu agencia?</h4>
            <p className="text-xs text-slate-400">Nuestra asistente de IA o el equipo de Engelberth te responderán de inmediato.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenChat}
              className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white/10 text-slate-200 border border-white/15 hover:bg-white/20 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#F1A80A]" />
              <span>Preguntar a la IA</span>
            </button>
            <a
              href={`https://api.whatsapp.com/send?phone=${COURSE_PRICING.whatsappPhone}&text=${encodeURIComponent('Hola Engelberth, tengo una consulta sobre el Curso de IA para Agencias de Viajes.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
