import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Play, ShieldCheck, ArrowRight, CheckCircle2, TrendingUp, Zap, Star, Users, Award } from 'lucide-react';
import { COURSE_PRICING } from '../data/courseData';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onOpenVideoModal: (videoId: string) => void;
}

const ROTATING_PHRASES = [
  'Automatiza tu Agencia de Viajes',
  'Cotiza en 30 Segundos con DeepSeek',
  'Vende Paquetes Turísticos 24/7 por WhatsApp',
  'Crea Videos Virales con Avatares de IA',
  'Centraliza Políticas de Destinos con NotebookLM',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onOpenVideoModal }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animated Typing Effect
  useEffect(() => {
    const handleTyping = () => {
      const fullText = ROTATING_PHRASES[currentPhraseIndex];
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2200);
          setTypingSpeed(40);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
          setTypingSpeed(70);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);

  // Interactive Particle / 3D Nodes Network Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create tech nodes
    const nodeCount = Math.min(Math.floor((width * height) / 14000), 55);
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const colors = ['#F1A80A', '#00F0FF', '#38BDF8', '#F59E0B'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background radial ambient glow
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 350);
      gradient.addColorStop(0, 'rgba(241, 168, 10, 0.07)');
      gradient.addColorStop(0.5, 'rgba(0, 240, 255, 0.04)');
      gradient.addColorStop(1, 'rgba(11, 25, 44, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Mouse gravity pull
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          n.x -= (dx / dist) * force * 1.5;
          n.y -= (dy / dist) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const cdx = n.x - n2.x;
          const cdy = n.y - n2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 120) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            const opacity = 1 - cdist / 120;
            ctx.strokeStyle = `rgba(241, 168, 10, ${opacity * 0.22})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#0B192C]">
      {/* Background Tech Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust pill above headline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F1A80A] text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#F1A80A] animate-spin" style={{ animationDuration: '4s' }} />
          <span className="tracking-wide uppercase text-[11px] sm:text-xs">ENTRENAMIENTO PRESENCIAL 100% PRÁCTICO</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#F1A80A]" />
          <span className="hidden sm:inline-block text-slate-400 font-mono text-[11px]">CUSCO</span>
        </div>

        {/* Dynamic Typing Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
            {displayedText}
            <span className="inline-block w-1 h-9 sm:h-14 md:h-16 bg-[#F1A80A] ml-1 animate-pulse align-middle" />
          </span>
          <span className="block mt-2 text-[#F1A80A]">
            con Inteligencia Artificial
          </span>
        </h1>

        {/* Persuasive Subheadline */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          El primer entrenamiento intensivo <strong className="text-[#F1A80A] font-bold">Totalmente Práctico Presencial</strong> de 4 días (2.5 horas diarias). Aprende a desplegar las 7 Soluciones Operativas de IA para responder cotizaciones en 30s, cerrar ventas 24/7 en WhatsApp y viralizar tus destinos.
        </p>

        {/* Key Highlights Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10 text-xs sm:text-sm text-slate-200">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-[#F1A80A] shrink-0" />
            <span>8, 9, 10 y 11 de Septiembre</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Local: Av La Cultura 235, Magisterio (3er piso)</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] font-semibold backdrop-blur-sm">
            <Zap className="w-4 h-4 text-[#F1A80A] shrink-0 fill-[#F1A80A]" />
            <span>🔥 1 Mes de Asesoría VIP Directa</span>
          </div>
        </div>

        {/* CTA Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-xl mx-auto mb-12">
          {/* Primary Pulsating Glow CTA in Sophisticated Dark Gold */}
          <button
            id="hero-primary-cta"
            onClick={onOpenCheckout}
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg text-[#0B192C] bg-[#F1A80A] shadow-[0_0_30px_rgba(241,168,10,0.35)] hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-2 tracking-tight">
              <span>Separar mi Cupo con S/ 50</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </span>
          </button>

          {/* Secondary Watch Masterclass Video CTA */}
          <button
            id="hero-watch-demo-cta"
            onClick={() => onOpenVideoModal('L_LUpnjgPso')}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md cursor-pointer group shadow-lg shadow-black/40"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/30 flex items-center justify-center text-cyan-400 border border-cyan-500/40 transition-colors">
              <Play className="w-4 h-4 fill-cyan-400 ml-0.5" />
            </div>
            <span>Ver Masterclass Demo</span>
          </button>
        </div>

        {/* Live Social Proof Bar */}
        <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-[#F1A80A] mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-black text-white">+150</span>
            </div>
            <p className="text-xs text-slate-400">Agencias Capacitadas</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-black text-white">30 seg</span>
            </div>
            <p className="text-xs text-slate-400">Cotizaciones con DeepSeek</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-[#F1A80A] mb-1">
              <Star className="w-4 h-4 fill-[#F1A80A]" />
              <span className="text-xl sm:text-2xl font-black text-white">4.9 / 5</span>
            </div>
            <p className="text-xs text-slate-400">Calificación de Alumnos</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-black text-white">30 Días</span>
            </div>
            <p className="text-xs text-slate-400">Asesoría VIP 1-a-1</p>
          </div>
        </div>
      </div>
    </section>
  );
};
