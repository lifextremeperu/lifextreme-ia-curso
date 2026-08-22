import React, { useState } from 'react';
import { Sparkles, Terminal, Copy, Check, Send, RotateCcw, Bot, Zap, ArrowRight } from 'lucide-react';
import { SAMPLE_PROMPT_SIMULATOR } from '../data/courseData';

interface AiSimulatorProps {
  onOpenCheckout: () => void;
}

export const AiSimulatorSection: React.FC<AiSimulatorProps> = ({ onOpenCheckout }) => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [customPrompt, setCustomPrompt] = useState(SAMPLE_PROMPT_SIMULATOR[0].prompt);
  const [generatedOutput, setGeneratedOutput] = useState(SAMPLE_PROMPT_SIMULATOR[0].output);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectTemplate = (index: number) => {
    setSelectedTemplateIndex(index);
    setCustomPrompt(SAMPLE_PROMPT_SIMULATOR[index].prompt);
    setGeneratedOutput(SAMPLE_PROMPT_SIMULATOR[index].output);
  };

  const handleRunPrompt = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Simulate real-time prompt generation
      if (customPrompt.toLowerCase().includes('cusco') || customPrompt.toLowerCase().includes('machu')) {
        setGeneratedOutput(`✨ COTIZACIÓN OFICIAL GENERADA POR IA (DEEPSEEK R1)
Destino: Cusco & Valle Sagrado • 4D/3N
Margen Calculado: 28% Neto

DÍA 1: Arribo a Cusco + Mate de Coca + City Tour Arqueológico Privado.
DÍA 2: Valle Sagrado (Pisac, Ollantaytambo) + Almuerzo Buffet + Noche en Aguas Calientes.
DÍA 3: Machu Picchu Circuito Clásico + Almuerzo en Café Inkaterra + Tren Vistadome.
DÍA 4: Check-out + Mercado San Pedro + Traslado al Aeropuerto.

💰 Inversión Total: $460 USD por pasajero (Incluye Boletos de Tren Vistadome, Tickets Oficiales y Guía Privado).`);
      } else if (customPrompt.toLowerCase().includes('cancun') || customPrompt.toLowerCase().includes('playa')) {
        setGeneratedOutput(`🌴 RESPUESTA WHATSAPP AUTOMÁTICA (MODO VENTAS 24/7):
¡Hola! Qué gusto saludarte. Tenemos 2 opciones Todo Incluido para Cancún el próximo mes:
1. Riu Cancún (Zona Hotelera): $780 USD p/p
2. Hard Rock Hotel Cancún: $1,050 USD p/p

Incluye Boletos Aéreos + Traslados + Comidas/Bebidas 24 hrs.
¿Para cuántos adultos y niños cotizamos?`);
      } else {
        setGeneratedOutput(`🚀 RESULTADO PROCESADO POR MOTOR DE IA TURÍSTICA:
Respuesta generada para: "${customPrompt.slice(0, 60)}..."

• Estructura: Optimizada para conversión inmediata y claridad de tarifas.
• Tiempo de generación: 0.84 segundos.
• Compatible con exportación directa a WhatsApp y PDF.`);
      }
      setIsGenerating(false);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-xs font-bold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Simulador Interactivo de Prompts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Prueba la <span className="text-[#F1A80A]">Potencia de los Prompts</span> del Curso
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Experimenta cómo la IA genera respuestas turísticas exactas, cotizaciones con margen y copys de WhatsApp en segundos.
          </p>
        </div>

        {/* Template Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {SAMPLE_PROMPT_SIMULATOR.map((template, idx) => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                selectedTemplateIndex === idx
                  ? 'bg-[#F1A80A] text-[#0B192C] shadow-lg shadow-[#F1A80A]/20'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${selectedTemplateIndex === idx ? 'fill-[#0B192C]' : 'text-[#F1A80A]'}`} />
              <span>{template.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Prompt Input / Editor */}
          <div className="lg:col-span-6 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F1A80A] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Prompt de Entrada (Input)
                </span>
                <span className="text-[11px] text-slate-400">Editable para probar</span>
              </div>
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                rows={9}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-3.5 text-xs sm:text-sm font-mono text-slate-200 focus:outline-none focus:border-[#F1A80A] transition-colors resize-none leading-relaxed"
                placeholder="Escribe o edita el prompt para la agencia..."
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                onClick={() => handleSelectTemplate(selectedTemplateIndex)}
                className="px-3 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>

              <button
                onClick={handleRunPrompt}
                disabled={isGenerating}
                className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#F1A80A] text-[#0B192C] hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-[#F1A80A]/20 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Generando con IA...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Ejecutar Prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: AI Output Terminal */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0B192C] border border-white/15 p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F1A80A] flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  Salida de la IA (Resultado Instantáneo)
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Output Canvas */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/10 text-xs sm:text-sm font-sans text-slate-200 whitespace-pre-line leading-relaxed min-h-[220px] max-h-[300px] overflow-y-auto">
                {isGenerating ? (
                  <div className="flex items-center justify-center h-44 gap-2 text-[#F1A80A]">
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span className="text-sm font-mono animate-pulse">DeepSeek procesando cotización...</span>
                  </div>
                ) : (
                  generatedOutput
                )}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                Aprenderás más de <strong className="text-white">+80 Mega-Prompts Turísticos</strong> listos para copiar.
              </span>
              <button
                onClick={onOpenCheckout}
                className="text-[#F1A80A] hover:underline font-bold flex items-center gap-1 shrink-0"
              >
                <span>Acceder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
