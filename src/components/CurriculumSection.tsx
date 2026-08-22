import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, CheckCircle2, Sparkles, ArrowRight, Eye, X, ZoomIn, Layers, Award } from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/courseData';
import { CurriculumModule } from '../types';

interface CurriculumSectionProps {
  onOpenCheckout: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onOpenCheckout }) => {
  const [openModule, setOpenModule] = useState<number | null>(1);
  const [previewModalModule, setPreviewModalModule] = useState<CurriculumModule | null>(null);

  const toggleModule = (moduleNum: number) => {
    setOpenModule(openModule === moduleNum ? null : moduleNum);
  };

  return (
    <section id="temario" className="py-20 md:py-28 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Plan de Estudios Profesional con Ejemplos Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Temario Completo <span className="text-[#F1A80A]">Paso a Paso</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Cada módulo incluye demostraciones prácticas y plantillas listas para clonar en tu agencia. Mira lo que serás capaz de construir:
          </p>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-4 mb-14">
          {CURRICULUM_MODULES.map((mod) => {
            const isOpen = openModule === mod.number;
            return (
              <div
                key={mod.number}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white/5 border-[#F1A80A]/50 shadow-2xl shadow-black/60'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Module Header Button */}
                <button
                  onClick={() => toggleModule(mod.number)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-sm sm:text-base shrink-0 transition-colors ${
                      isOpen ? 'bg-[#F1A80A] text-[#0B192C] shadow-lg shadow-[#F1A80A]/25' : 'bg-white/10 text-slate-300'
                    }`}>
                      M{mod.number}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[#F1A80A] font-semibold">{mod.duration}</span>
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300">
                          <Eye className="w-3 h-3 text-[#F1A80A]" />
                          <span>Ejemplo Incluido</span>
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug truncate sm:whitespace-normal">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Collapsed small image preview pill */}
                    {mod.exampleImage && !isOpen && (
                      <div className="hidden md:block w-14 h-9 rounded-lg overflow-hidden border border-white/15 opacity-70 group-hover:opacity-100">
                        <img
                          src={mod.exampleImage}
                          alt={mod.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#F1A80A]" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Module Collapsible Content */}
                {isOpen && (
                  <div className="px-4 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-white/10 animate-fadeIn">
                    <p className="text-sm sm:text-base text-slate-300 mb-6 italic leading-relaxed">
                      "{mod.summary}"
                    </p>

                    {/* 2-Column Grid: Lessons Left, Example Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left: Lessons Checklist & Tools */}
                      <div className="lg:col-span-6 space-y-4">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-bold text-[#F1A80A] mb-3 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" />
                            Contenido del Módulo
                          </h4>
                          <div className="space-y-2.5">
                            {mod.lessons.map((lesson, lIdx) => (
                              <div key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-[#F1A80A] shrink-0 mt-0.5" />
                                <span>{lesson}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practical Deliverable Tag */}
                        {mod.practicalOutcome && (
                          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                            <Award className="w-4 h-4 text-[#F1A80A] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[11px] uppercase font-bold text-[#F1A80A] block">
                                Entregable Práctico para tu Agencia:
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-white">
                                {mod.practicalOutcome}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Tools Used */}
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Herramientas:
                          </span>
                          {mod.toolsUsed.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/5 text-[#F1A80A] border border-white/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Real Visual Example Card */}
                      {mod.exampleImage && (
                        <div className="lg:col-span-6 rounded-xl bg-black/40 border border-white/15 overflow-hidden p-3.5 shadow-xl">
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#F1A80A]" />
                              Ejemplo Real de lo que Construirás
                            </span>
                            <button
                              onClick={() => setPreviewModalModule(mod)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F1A80A] hover:underline cursor-pointer bg-white/5 px-2 py-0.5 rounded border border-white/10"
                            >
                              <ZoomIn className="w-3 h-3" />
                              <span>Ampliar</span>
                            </button>
                          </div>

                          {/* Image Container with Hover Effect */}
                          <div
                            onClick={() => setPreviewModalModule(mod)}
                            className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 group cursor-pointer bg-slate-950"
                          >
                            <img
                              src={mod.exampleImage}
                              alt={`Ejemplo ${mod.title}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                              <span className="text-xs font-semibold text-white flex items-center gap-1.5 bg-[#0B192C]/90 px-2.5 py-1 rounded-lg border border-white/20">
                                <ZoomIn className="w-3.5 h-3.5 text-[#F1A80A]" />
                                Clic para ver en detalle
                              </span>
                            </div>
                          </div>

                          {/* Caption */}
                          {mod.exampleCaption && (
                            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                              {mod.exampleCaption}
                            </p>
                          )}
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F1A80A]/15 border border-[#F1A80A]/30 flex items-center justify-center text-[#F1A80A] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">¿Listo para capacitar a tu equipo con estas herramientas?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Asegura tu cupo con el 70% de descuento (S/ 147) y activa tu mes de asesoría 1-a-1 con Engelberth Egoavil.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-[#F1A80A] text-[#0B192C] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(241,168,10,0.3)] shrink-0 cursor-pointer"
          >
            <span>Inscribirme Ahora (S/ 147)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {previewModalModule && previewModalModule.exampleImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setPreviewModalModule(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0B192C] rounded-2xl border border-white/20 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F1A80A] block">
                  Módulo {previewModalModule.number} • Ejemplo Práctico
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {previewModalModule.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewModalModule(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                aria-label="Cerrar vista previa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 sm:p-6 bg-black/60 flex items-center justify-center">
              <img
                src={previewModalModule.exampleImage}
                alt={previewModalModule.title}
                className="w-full max-h-[60vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-4 sm:p-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-1">
                {previewModalModule.exampleCaption}
              </p>
              <button
                onClick={() => {
                  setPreviewModalModule(null);
                  onOpenCheckout();
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#F1A80A] text-[#0B192C] hover:brightness-110 transition-all shrink-0 cursor-pointer shadow-lg shadow-[#F1A80A]/20"
              >
                Inscribirme al Curso (S/ 147)
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

