import React from 'react';
import { Sparkles, ShieldCheck, Flame, MessageCircle, UserCheck, CheckCircle2, ArrowRight, Zap, Clock } from 'lucide-react';
import { COURSE_PRICING } from '../data/courseData';

interface VipBonusSectionProps {
  onOpenCheckout: () => void;
}

export const VipBonusSection: React.FC<VipBonusSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="bono-vip" className="py-16 md:py-24 bg-[#0B192C] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-[#F1A80A]/10 via-cyan-500/5 to-[#F1A80A]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Disruptive VIP Module Card in Sophisticated Dark style */}
        <div className="relative rounded-3xl p-0.5 bg-gradient-to-b from-[#F1A80A]/40 via-white/10 to-[#F1A80A]/20 shadow-2xl shadow-black/80">
          <div className="relative rounded-[23px] bg-[#0B192C] p-6 sm:p-10 md:p-12 overflow-hidden border border-white/10 backdrop-blur-xl">
            
            {/* Background watermark badge */}
            <div className="absolute -top-10 -right-10 text-[140px] font-black text-white/[0.02] select-none pointer-events-none font-mono">
              VIP
            </div>

            {/* Top Scarcity Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/40 text-[#F1A80A] text-xs sm:text-sm font-bold tracking-wide shadow-md">
                <Flame className="w-4 h-4 text-[#F1A80A] fill-[#F1A80A] animate-bounce" />
                <span>BONO EXCLUSIVO DE ESTA EDICIÓN (VALORADO EN $250 USD)</span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300">
                <Clock className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                <span>Quedan solo {COURSE_PRICING.availableSlots} cupos con este beneficio</span>
              </div>
            </div>

            {/* Obligatory Copy Header */}
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug mb-4">
                🔥 ACCESO VIP: 1 MES DE ASESORÍA IA POST-CURSO
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#F1A80A]/95 font-medium leading-relaxed bg-[#F1A80A]/10 p-4 sm:p-5 rounded-2xl border border-[#F1A80A]/30">
                &ldquo;No estarás solo. Al inscribirte, obtienes 30 días de acceso directo a nuestro Asesor Especialista en IA para ayudarte a implementar las herramientas en los casos reales de tu agencia.&rdquo;
              </p>
            </div>

            {/* Value Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F1A80A]/20 border border-[#F1A80A]/40 flex items-center justify-center text-[#F1A80A] shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">
                    Canal Directo de WhatsApp con el Especialista
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Pregunta cualquier duda técnica, envía capturas de tus flujos y recibe respuestas y notas de voz guiadas en menos de 24 hrs.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">
                    Auditoría de Cotizaciones y Prompts
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Revisamos tus paquetes turísticos específicos (Cusco, Europa, Caribe) y optimizamos los prompts para garantizar cotizaciones sin errores.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">
                    Desbloqueo de Trabas de Integración (Make & Bot)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Si te trabas conectando la API de WhatsApp o armando tu base en NotebookLM, te asistimos paso a paso hasta que funcione.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">
                    Garantía de Implementación Real
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Nuestro objetivo no es que acumules videos, sino que tu agencia termine el mes con su primer bot y cotizador activo.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box inside VIP Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/5 border border-white/15">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 line-through text-sm">Precio Regular: S/ 490</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    70% Descuento Activo
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  Solo S/ 147 PEN <span className="text-xs font-normal text-slate-400">(o $39 USD)</span>
                </div>
                <p className="text-xs text-[#F1A80A] font-medium mt-0.5">
                  Incluye el curso completo + las 7 soluciones + el mes de asesoría VIP
                </p>
              </div>

              <button
                id="vip-enroll-btn"
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-[#0B192C] bg-[#F1A80A] hover:brightness-110 transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(241,168,10,0.3)] cursor-pointer"
              >
                <span>Asegurar Asesoría VIP (Yape)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
