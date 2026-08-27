import React, { useState } from 'react';
import { 
  Target, 
  MessageSquareText, 
  Zap, 
  BookOpenCheck, 
  Video, 
  TrendingUp, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Copy, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { SEVEN_SOLUTIONS } from '../data/courseData';
import { SolutionItem } from '../types';

interface BentoSolutionsProps {
  onOpenCheckout: () => void;
  onSelectPromptForSandbox?: (prompt: string) => void;
}

export const BentoSolutions: React.FC<BentoSolutionsProps> = ({ onOpenCheckout, onSelectPromptForSandbox }) => {
  const [activeSolution, setActiveSolution] = useState<SolutionItem | null>(null);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Target': return <Target className="w-5 h-5" />;
      case 'MessageSquareText': return <MessageSquareText className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleCopyPrompt = (e: React.MouseEvent, id: string, text: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  return (
    <section id="soluciones" className="py-20 md:py-28 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      {/* Background accents */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-[#F1A80A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Arquitectura Práctica del Curso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Las <span className="text-[#F1A80A]">7 Soluciones Operativas</span> que Transformarán tu Agencia
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Olvídate de la teoría genérica. Cada solución es un sistema probado listo para conectar a tu agencia y ver resultados desde la primera semana.
          </p>
        </div>

        {/* Bento Box Asymmetrical Grid */}
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {SEVEN_SOLUTIONS.map((solution) => {
            return (
              <div
                key={solution.id}
                id={`bento-card-${solution.id}`}
                onClick={() => setActiveSolution(solution)}
                className={`${solution.gridSpan} group relative rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#F1A80A]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-[#F1A80A]/10 overflow-hidden backdrop-blur-md min-h-[320px]`}
              >
                {/* Background Image and Overlays */}
                {solution.imageUrl ? (
                  <>
                    <img 
                      src={solution.imageUrl} 
                      alt={solution.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 pointer-events-none z-0"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${solution.bgGradient} opacity-90 z-0 pointer-events-none`} />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-white/5 z-0 pointer-events-none" />
                )}

                {/* Subtle card glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F1A80A]/5 rounded-full blur-2xl group-hover:bg-[#F1A80A]/15 transition-all duration-500 pointer-events-none z-0" />

                {/* Top Badge & Number */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#F1A80A]">
                      {getIcon(solution.iconName)}
                      <span>{solution.badge}</span>
                    </span>
                    <span className="font-mono text-xl sm:text-2xl font-black text-slate-500 group-hover:text-[#F1A80A] transition-colors">
                      {solution.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5 group-hover:text-[#F1A80A] transition-colors">
                    {solution.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                    {solution.shortDesc}
                  </p>
                </div>

                {/* Bottom Metric & Tools */}
                <div className="relative z-10">
                  {/* Real Metric Highlight */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 mb-4 flex items-center justify-between">
                    <div>
                      <span className="block text-xl sm:text-2xl font-black text-[#F1A80A]">
                        {solution.metric}
                      </span>
                      <span className="text-xs text-slate-400">
                        {solution.metricLabel}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#F1A80A]/10 border border-[#F1A80A]/30 flex items-center justify-center text-[#F1A80A] group-hover:scale-110 transition-transform">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {solution.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Trigger below Bento */}
        <div className="mt-12 text-center">
          <button
            id="bento-enroll-cta"
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-[#F1A80A] text-[#0B192C] shadow-[0_0_25px_rgba(241,168,10,0.3)] hover:brightness-110 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Aprender a Implementar las 7 Soluciones con Asesoría</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal Detail for Solution & Interactive Prompt Preview */}
      {activeSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative w-full max-w-2xl bg-[#0B192C] rounded-2xl border border-white/15 p-6 sm:p-8 text-white shadow-2xl shadow-black max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveSolution(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#F1A80A]/20 border border-[#F1A80A]/40 text-[#F1A80A] flex items-center justify-center">
                {getIcon(activeSolution.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#F1A80A] uppercase tracking-wide">
                  Solución {activeSolution.number} • {activeSolution.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeSolution.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {activeSolution.fullDesc}
            </p>

            {/* Metric Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-center justify-between">
              <div>
                <span className="text-2xl font-black text-[#F1A80A]">{activeSolution.metric}</span>
                <p className="text-xs text-slate-400">{activeSolution.metricLabel}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {activeSolution.tools.map(tool => (
                  <span key={tool} className="text-xs px-2.5 py-1 rounded bg-white/5 text-cyan-300 border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Prompt Template Preview */}
            {activeSolution.demoPrompt && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F1A80A]" />
                    Prompt Turístico de Ejemplo Incluido
                  </span>
                  <button
                    onClick={(e) => handleCopyPrompt(e, activeSolution.id, activeSolution.demoPrompt!)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#F1A80A] hover:text-amber-300 bg-[#F1A80A]/10 px-2 py-1 rounded border border-[#F1A80A]/30 transition-colors"
                  >
                    {copiedPromptId === activeSolution.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar Prompt</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                  {activeSolution.demoPrompt}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setActiveSolution(null);
                  onOpenCheckout();
                }}
                className="flex-1 py-3.5 px-5 rounded-xl font-bold text-[#0B192C] bg-[#F1A80A] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(241,168,10,0.3)]"
              >
                <span>Inscribirme al Curso (Yape)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveSolution(null)}
                className="py-3.5 px-5 rounded-xl font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
