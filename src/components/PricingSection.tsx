import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Flame, Clock } from 'lucide-react';
import { COURSE_PRICING } from '../data/courseData';

interface PricingProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="precios" className="py-20 md:py-28 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F1A80A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Inversión con Retorno Inmediato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Asegura tu Cupo con <span className="text-[#F1A80A]">70% de Descuento</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Un solo paquete turístico que cierres gracias a tu nuevo cotizador con IA pagará esta inversión por completo.
          </p>
        </div>

        {/* Main Pricing Hero Card */}
        <div className="max-w-2xl mx-auto relative rounded-3xl p-0.5 bg-gradient-to-b from-[#F1A80A]/40 via-white/10 to-[#F1A80A]/20 shadow-2xl shadow-black/80">
          <div className="rounded-[23px] bg-[#0B192C] p-6 sm:p-10 text-white relative overflow-hidden border border-white/10 backdrop-blur-xl">
            
            {/* Scarcity Badge */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#F1A80A] text-[#0B192C] uppercase tracking-wide flex items-center gap-1.5 shadow-md">
                <Flame className="w-3.5 h-3.5 fill-[#0B192C]" />
                Acceso Total + 1 Mes VIP
              </span>
              <span className="text-xs font-semibold text-red-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                Solo {COURSE_PRICING.availableSlots} cupos restantes
              </span>
            </div>

            {/* Price block */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                  {COURSE_PRICING.currencySymbol} {COURSE_PRICING.discountedPrice}
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  {COURSE_PRICING.currencyCode} <span className="text-slate-400 font-normal">({COURSE_PRICING.usdEquivalent})</span>
                </span>
                <span className="text-base sm:text-lg text-slate-500 line-through">
                  {COURSE_PRICING.currencySymbol} {COURSE_PRICING.regularPrice}
                </span>
              </div>
              <p className="text-xs text-[#F1A80A] font-medium mt-1">
                Pago único • Acceso de por vida • Sin mensualidades ocultas
              </p>
            </div>

            {/* Inclusions List */}
            <div className="space-y-3 pt-6 border-t border-white/10 mb-8 text-sm">
              <div className="flex items-start gap-3 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#F1A80A]/20 text-[#F1A80A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Curso Completo:</strong> Las 7 Soluciones Operativas de IA para Turismo (7 Módulos)</span>
              </div>

              <div className="flex items-start gap-3 text-[#F1A80A] font-semibold bg-[#F1A80A]/10 p-3 rounded-2xl border border-[#F1A80A]/30">
                <div className="w-5 h-5 rounded-full bg-[#F1A80A] text-[#0B192C] flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-3.5 h-3.5 fill-[#0B192C]" />
                </div>
                <span><strong>🔥 BONO VIP:</strong> 1 Mes Completo (30 días) de Asesoría Directa con Engelberth Egoavil</span>
              </div>

              <div className="flex items-start gap-3 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#F1A80A]/20 text-[#F1A80A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Pack de +80 Mega-Prompts:</strong> Cotizadores, copys de WhatsApp y guiones virales</span>
              </div>

              <div className="flex items-start gap-3 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#F1A80A]/20 text-[#F1A80A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Plantillas No-Code de Make & WhatsApp:</strong> Flujos listos para importar con 1 clic</span>
              </div>

              <div className="flex items-start gap-3 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#F1A80A]/20 text-[#F1A80A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Acceso Vitalicio:</strong> Todas las grabaciones en 1080p y actualizaciones futuras</span>
              </div>

              <div className="flex items-start gap-3 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#F1A80A]/20 text-[#F1A80A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Comunidad Privada de Agencias:</strong> Networking con operadores y agencias de la región</span>
              </div>
            </div>

            {/* Action Button to Open Yape Checkout */}
            <button
              id="pricing-enroll-btn"
              onClick={onOpenCheckout}
              className="w-full py-4 sm:py-5 px-6 rounded-2xl font-bold text-base sm:text-lg text-[#0B192C] bg-[#F1A80A] hover:brightness-110 transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(241,168,10,0.3)] cursor-pointer mb-4"
            >
              <span>Separar mi cupo con S/ 50 (Yape)</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Payment micro details */}
            <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Pago Seguro por Yape
              </span>
              <span>•</span>
              <span>Titular: <strong>{COURSE_PRICING.yapeTitular}</strong></span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
