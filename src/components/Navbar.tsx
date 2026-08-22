import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, ShieldCheck, Menu, X, ArrowRight, Bot } from 'lucide-react';
import { COURSE_PRICING } from '../data/courseData';

interface NavbarProps {
  onOpenCheckout: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 35, seconds: 48 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scarcity Bar */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-medium text-xs sm:text-sm py-1.5 px-4 text-center sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1 font-bold bg-slate-950 text-amber-400 px-2 py-0.5 rounded text-xs uppercase tracking-wide">
            🔥 Oferta 70% OFF
          </span>
          <span>
            Solo quedan <strong className="font-bold underline">{COURSE_PRICING.availableSlots} cupos VIP</strong> con 1 Mes de Asesoría Incluida
          </span>
          <span className="hidden md:inline-flex items-center font-mono font-bold bg-black/10 px-2 py-0.5 rounded text-xs">
            Termina en: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-[31px] z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B192C]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60'
            : 'bg-[#0B192C]/80 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#F1A80A] rounded-lg flex items-center justify-center font-bold text-[#0B192C] shadow-[0_0_15px_rgba(241,168,10,0.3)]">
                IA
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                    TRAVEL<span className="text-cyan-400">AGENCY</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    PRD V2.0
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
                  Engelberth Egoavil • IA Turística
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              <button
                id="nav-btn-solutions"
                onClick={() => scrollTo('soluciones')}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                7 Soluciones
              </button>
              <button
                id="nav-btn-vip"
                onClick={() => scrollTo('bono-vip')}
                className="hover:text-[#F1A80A] transition-colors flex items-center gap-1.5 text-[#F1A80A] font-semibold cursor-pointer px-2.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F1A80A] animate-pulse" />
                <span>Bono VIP (1 Mes)</span>
              </button>
              <button
                id="nav-btn-demo"
                onClick={() => scrollTo('demostracion')}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Videos & Demos
              </button>
              <button
                id="nav-btn-syllabus"
                onClick={() => scrollTo('temario')}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Temario
              </button>
              <button
                id="nav-btn-faq"
                onClick={() => scrollTo('faq')}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Preguntas
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* WhatsApp direct contact badge from Sophisticated Dark design */}
              <span className="hidden md:inline-flex items-center text-xs font-mono font-medium text-slate-300 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                +51 958 050 928
              </span>

              {/* AI Chatbot Assistant trigger */}
              <button
                id="navbar-chat-trigger"
                onClick={onOpenChat}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-white/5 text-cyan-300 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all cursor-pointer shadow-sm"
                title="Hablar con la Asistente IA del Curso"
              >
                <Bot className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span>Asistente IA</span>
              </button>

              {/* Primary Glowing Inscription CTA in Sophisticated Dark Gold */}
              <button
                id="navbar-enroll-cta"
                onClick={onOpenCheckout}
                className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#0B192C] bg-[#F1A80A] shadow-[0_0_20px_rgba(241,168,10,0.3)] hover:brightness-110 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>Inscribirme (Yape)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none"
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B192C]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <button
              onClick={() => scrollTo('soluciones')}
              className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-white/5 rounded-lg font-medium"
            >
              🚀 Las 7 Soluciones de IA
            </button>
            <button
              onClick={() => scrollTo('bono-vip')}
              className="block w-full text-left py-2 px-3 text-[#F1A80A] bg-[#F1A80A]/10 border border-[#F1A80A]/30 rounded-lg font-semibold"
            >
              🔥 Bono VIP: 1 Mes de Asesoría Directa
            </button>
            <button
              onClick={() => scrollTo('demostracion')}
              className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-white/5 rounded-lg font-medium"
            >
              🎬 Videos & Demos Prácticas
            </button>
            <button
              onClick={() => scrollTo('temario')}
              className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-white/5 rounded-lg font-medium"
            >
              📚 Temario Completo
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="block w-full text-left py-2 px-3 text-slate-200 hover:bg-white/5 rounded-lg font-medium"
            >
              ❓ Preguntas Frecuentes
            </button>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm bg-white/5 text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Consultar con Asistente Virtual</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-[#F1A80A] text-[#0B192C] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(241,168,10,0.3)] hover:brightness-110"
              >
                <span>Asegurar mi Cupo por Yape (S/ 147)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
