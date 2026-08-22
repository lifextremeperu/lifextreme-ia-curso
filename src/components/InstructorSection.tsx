import React from 'react';
import { Award, CheckCircle2, MessageSquare, Sparkles, Star, Users, Phone } from 'lucide-react';
import { COURSE_PRICING } from '../data/courseData';

interface InstructorProps {
  onOpenCheckout: () => void;
}

export const InstructorSection: React.FC<InstructorProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#F1A80A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Instructor Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-0.5 bg-gradient-to-b from-[#F1A80A]/40 via-white/10 to-white/5 shadow-2xl shadow-black/80">
              <div className="relative rounded-[23px] bg-[#0B192C] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Engelberth Egoavil - Instructor de IA para Agencias de Viajes"
                  className="w-full h-96 sm:h-[420px] object-cover object-top filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />

                {/* Floating Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0B192C]/90 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-white">Engelberth Egoavil</h4>
                      <p className="text-xs text-[#F1A80A] font-medium">Especialista en IA & Automatización Turística</p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#F1A80A] text-[#0B192C] flex items-center justify-center font-black text-xs shadow-md">
                      PRO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructor Bio & Message */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Tu Mentor y Asesor Directo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              &ldquo;Mi meta es que tu agencia facture más y opere con el 80% menos de estrés manual.&rdquo;
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Hola, soy <strong>Engelberth Egoavil</strong>. He dedicado los últimos años a integrar sistemas avanzados de Inteligencia Artificial en empresas y agencias de turismo. Conozco de primera mano el dolor de perder clientes por demorar 2 horas en una cotización o no responder a tiempo un WhatsApp un domingo por la noche. Durante estos 4 días presenciales, te transmitiré toda mi experiencia práctica.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Este curso no es una recopilación de teoría; es el <strong>manual operativo exacto</strong> con los prompts, flujos de Make y modelos de DeepSeek y NotebookLM que yo mismo configuro para transformar agencias en negocios altamente rentables.
            </p>

            {/* Checklist of commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F1A80A] shrink-0" />
                <span>Asesoría 1-a-1 directa por WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F1A80A] shrink-0" />
                <span>Revisión de paquetes reales</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F1A80A] shrink-0" />
                <span>Plantillas de prompts verificadas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F1A80A] shrink-0" />
                <span>Soporte prioritario post-curso</span>
              </div>
            </div>

            {/* Direct Contact Phone & Registration */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCheckout}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#F1A80A] text-[#0B192C] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(241,168,10,0.3)] cursor-pointer"
              >
                Inscribirme al Curso Presencial
              </button>
              <a
                href="https://www.linkedin.com/in/engelberthep"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0077B5] text-white hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,119,181,0.3)] cursor-pointer flex items-center gap-2"
              >
                Ver mi LinkedIn
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Oficial: <strong>{COURSE_PRICING.yapePhoneFormatted}</strong></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
