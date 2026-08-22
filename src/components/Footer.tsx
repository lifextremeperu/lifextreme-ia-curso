import React from 'react';
import { ShieldCheck, Phone, ArrowUp, Lock, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { COURSE_PRICING } from '../data/courseData';

interface FooterProps {
  onOpenCheckout: () => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout, onOpenChat }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] text-slate-400 text-xs border-t border-white/10 relative z-10">
      {/* Upper Footer CTA Strip */}
      <div className="bg-white/5 border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-white font-black text-lg sm:text-xl">
              <span>TURISMO<span className="text-[#F1A80A]">IA</span></span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#F1A80A] border border-white/15">
                Cohorte 2026
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Curso de Inteligencia Artificial para Agencias de Viajes • Instructor: Engelberth Egoavil
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenChat}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold transition-colors flex items-center gap-2 border border-white/15 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#F1A80A]" />
              <span>Preguntas al Asistente</span>
            </button>
            <button
              onClick={onOpenCheckout}
              className="px-5 py-2.5 rounded-xl bg-[#F1A80A] hover:brightness-110 text-[#0B192C] font-black transition-all shadow-[0_0_20px_rgba(241,168,10,0.25)] cursor-pointer"
            >
              Inscribirme por Yape (S/ 147)
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: About */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Acerca del Programa</h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Capacitación especializada en modelos de IA generativa (ChatGPT, DeepSeek, NotebookLM, HeyGen, Make) orientada 100% a la rentabilidad y automatización de agencias de viajes y operadores receptivos.
            </p>
          </div>

          {/* Col 2: Inscription & Payment */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Pago Oficial Yape</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Número: <strong className="text-white font-mono">{COURSE_PRICING.yapePhoneFormatted}</strong><br />
              Titular: <strong className="text-white">{COURSE_PRICING.yapeTitular}</strong><br />
              Inversión: <span className="text-[#F1A80A] font-bold">S/ {COURSE_PRICING.discountedPrice} PEN</span>
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>Comprobante validado por WhatsApp</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm tracking-wide">Navegación</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#soluciones" className="hover:text-[#F1A80A] transition-colors">Las 7 Soluciones Operativas</a>
              </li>
              <li>
                <a href="#bono-vip" className="hover:text-[#F1A80A] transition-colors text-[#F1A80A] font-semibold">Bono VIP: 1 Mes de Asesoría</a>
              </li>
              <li>
                <a href="#demostracion" className="hover:text-[#F1A80A] transition-colors">Demos en Video</a>
              </li>
              <li>
                <a href="#temario" className="hover:text-[#F1A80A] transition-colors">Temario de 7 Módulos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F1A80A] transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Contacto & Soporte</h4>
            <p className="text-xs text-slate-400">
              ¿Tienes consultas directas antes de matricularte? Escríbenos al WhatsApp oficial de admisiones:
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${COURSE_PRICING.whatsappPhone}&text=${encodeURIComponent('Hola Engelberth, deseo consultar sobre el Curso de IA para Agencias.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/30 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span className="font-semibold">+51 958 050 928</span>
            </a>
          </div>

        </div>

        {/* Copyright & Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Curso Inteligencia Artificial para Agencias de Viajes. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Privacidad & Términos</span>
            <span>•</span>
            <span>Garantía de Satisfacción</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors ml-2 cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
