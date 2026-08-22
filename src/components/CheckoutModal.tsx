import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  Copy, 
  Check, 
  QrCode, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Building2, 
  User, 
  ChevronLeft, 
  Flame, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSE_PRICING } from '../data/courseData';
import { LeadData } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY = 'curso_ia_turismo_lead';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<LeadData>({
    userName: '',
    agencyName: '',
    phone: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [copiedAmount, setCopiedAmount] = useState(false);

  // Restore saved lead data from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, []);

  // Save to localStorage whenever form data changes to prevent data loss when switching to banking apps
  useEffect(() => {
    if (formData.userName || formData.agencyName || formData.phone) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (e) {
        console.warn('LocalStorage error', e);
      }
    }
  }, [formData]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.userName.trim()) {
      newErrors.userName = 'Por favor ingresa tu nombre completo.';
    }
    if (!formData.agencyName.trim()) {
      newErrors.agencyName = 'Por favor ingresa el nombre de tu agencia o actividad.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Ingresa un número de WhatsApp válido.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(COURSE_PRICING.yapePhone);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handleCopyAmount = () => {
    navigator.clipboard.writeText(COURSE_PRICING.discountedPrice.toString());
    setCopiedAmount(true);
    setTimeout(() => setCopiedAmount(false), 2000);
  };

  // Mandatory WhatsApp Hand-off Algorithm from PRD
  const handleWhatsAppRedirect = () => {
    // Launch celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F1A80A', '#00F0FF', '#10B981', '#ffffff'],
      });
    } catch (e) {
      // ignore
    }

    // Datos recuperados del estado
    const phoneTarget = '51958050928';
    const userName = formData.userName || 'Alumno';
    const agencyName = formData.agencyName || 'Agencia de Viajes';

    // Construcción del mensaje predefinido (Template Literal)
    const rawMessage = `🚀 ¡Hola Engelberth! Vengo de la web interactiva.
Acabo de realizar mi pago por Yape para el Curso de IA.

👤 Mis datos de inscripción:
- Nombre: ${userName}
- Agencia: ${agencyName}

Adjunto la captura de mi voucher para asegurar mi cupo y activar mi mes de asesoría VIP. ¡Quedo atento!`;

    // Codificación URI para asegurar lectura correcta de espacios y saltos de línea
    const encodedMessage = encodeURIComponent(rawMessage);

    // Enrutamiento condicional (Detectar dispositivo móvil vs Desktop)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseURL = isMobile ? 'api.whatsapp.com' : 'web.whatsapp.com';

    const whatsappURL = `https://${baseURL}/send?phone=${phoneTarget}&text=${encodedMessage}`;

    // Abrir en nueva pestaña
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#0B192C] rounded-2xl sm:rounded-3xl border border-white/15 p-5 sm:p-7 md:p-8 text-white shadow-2xl shadow-black max-h-[95vh] overflow-y-auto backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          id="checkout-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar & Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-2 text-xs font-mono mb-2">
            <span className="text-[#F1A80A] font-bold uppercase">
              {step === 1 ? 'Paso 1 de 2: Datos de Inscripción' : 'Paso 2 de 2: Pago por Yape'}
            </span>
            <span className="text-slate-400">
              Oferta: S/ {COURSE_PRICING.discountedPrice} PEN
            </span>
          </div>

          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-[#F1A80A] transition-all duration-300 rounded-full"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
        </div>

        {/* ================= STEP 1: LEAD GEN CAPTURE ================= */}
        {step === 1 && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-[11px] font-bold uppercase mb-2">
                <Flame className="w-3 h-3 fill-[#F1A80A]" />
                <span>Bono de Asesoría VIP Incluido</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Reserva tu Cupo en el Curso
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Ingresa tus datos para registrar tu acceso y preparar tu activación personalizada.
              </p>
            </div>

            <form onSubmit={handleGoToPayment} className="space-y-4">
              {/* Field: Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    placeholder="Ej. Juan Pérez"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.userName ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-[#F1A80A]'
                    }`}
                  />
                </div>
                {errors.userName && <p className="text-red-400 text-xs mt-1">{errors.userName}</p>}
              </div>

              {/* Field: Agency Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Nombre de tu Agencia de Viajes *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="agencyName"
                    value={formData.agencyName}
                    onChange={handleInputChange}
                    placeholder="Ej. Destinos Mágicos Perú (o Agente Freelance)"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.agencyName ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-[#F1A80A]'
                    }`}
                  />
                </div>
                {errors.agencyName && <p className="text-red-400 text-xs mt-1">{errors.agencyName}</p>}
              </div>

              {/* Field: Phone (WhatsApp) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Teléfono / WhatsApp *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ej. +51 987 654 321"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-[#F1A80A]'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                <p className="text-[11px] text-slate-400 mt-1">
                  Usaremos este número para darte acceso a la comunidad y coordinar tu mes de asesoría.
                </p>
              </div>

              {/* Price summary badge */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block">Total a pagar en oferta:</span>
                  <span className="text-base font-black text-[#F1A80A]">S/ {COURSE_PRICING.discountedPrice} PEN</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  70% Descuento Aplicado
                </span>
              </div>

              {/* Submit CTA */}
              <button
                id="lead-submit-btn"
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-base text-[#0B192C] bg-[#F1A80A] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(241,168,10,0.3)] flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Ir al Pago (Yape)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* ================= STEP 2: INTERACTIVE YAPE GATEWAY ================= */}
        {step === 2 && (
          <div className="animate-fadeIn">
            {/* Back button */}
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors mb-3 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Modificar datos del alumno</span>
            </button>

            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold mb-2">
                <QrCode className="w-3.5 h-3.5" />
                <span>PAGO DIRECTO POR YAPE (PERÚ)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Escanea el QR o Transfiere por Yape
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Realiza el pago exacto y envía la captura de pantalla para activar tu acceso.
              </p>
            </div>

            {/* Simulated High-Res Yape Container */}
            <div className="rounded-2xl bg-white/5 border border-purple-500/30 p-5 sm:p-6 mb-6 shadow-inner text-center">
              
              {/* Dynamic SVG / Canvas Rendered High-Contrast Yape QR Code */}
              <div className="w-44 h-44 sm:w-48 sm:h-48 mx-auto bg-white p-3 rounded-2xl shadow-xl shadow-black/60 flex flex-col items-center justify-between mb-4 border-2 border-purple-400">
                <div className="w-full text-center text-[10px] font-black tracking-widest text-purple-900 uppercase">
                  YAPE • OFICIAL
                </div>
                
                {/* Visual QR Pattern representation */}
                <div className="w-32 h-32 relative bg-purple-950 p-1 rounded-lg flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded flex items-center justify-center p-1.5">
                    {/* SVG standard styled QR with Yape branding center */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-purple-950 fill-current">
                      <rect x="0" y="0" width="30" height="30" rx="3" />
                      <rect x="5" y="5" width="20" height="20" fill="white" />
                      <rect x="9" y="9" width="12" height="12" />
                      
                      <rect x="70" y="0" width="30" height="30" rx="3" />
                      <rect x="75" y="5" width="20" height="20" fill="white" />
                      <rect x="79" y="9" width="12" height="12" />

                      <rect x="0" y="70" width="30" height="30" rx="3" />
                      <rect x="5" y="75" width="20" height="20" fill="white" />
                      <rect x="9" y="79" width="12" height="12" />

                      {/* Random high density data grid dots */}
                      <rect x="36" y="8" width="6" height="6" />
                      <rect x="46" y="8" width="6" height="6" />
                      <rect x="56" y="8" width="6" height="6" />
                      <rect x="36" y="20" width="12" height="6" />
                      <rect x="52" y="20" width="8" height="6" />

                      <rect x="8" y="36" width="6" height="8" />
                      <rect x="20" y="36" width="8" height="6" />
                      <rect x="8" y="50" width="6" height="12" />
                      
                      {/* Center Brand Accent */}
                      <circle cx="50" cy="50" r="14" fill="#742284" />
                      <text x="50" y="54" fontSize="10" fontWeight="900" fill="white" textAnchor="middle">Y</text>

                      <rect x="68" y="40" width="8" height="8" />
                      <rect x="80" y="40" width="12" height="6" />
                      <rect x="70" y="54" width="22" height="6" />
                      <rect x="38" y="70" width="10" height="10" />
                      <rect x="52" y="70" width="8" height="8" />
                      <rect x="38" y="84" width="24" height="6" />
                      <rect x="66" y="74" width="10" height="16" />
                      <rect x="80" y="74" width="12" height="6" />
                    </svg>
                  </div>
                </div>

                <div className="text-[10px] font-bold text-slate-700">
                  {COURSE_PRICING.yapeTitular}
                </div>
              </div>

              {/* Hardcoded Data Box strictly following PRD */}
              <div className="space-y-2.5 max-w-sm mx-auto text-left text-xs sm:text-sm">
                {/* Phone */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Número Yape:</span>
                    <span className="text-sm sm:text-base font-black text-white font-mono tracking-wide">
                      {COURSE_PRICING.yapePhoneFormatted}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyNumber}
                    className="px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-purple-500/30"
                  >
                    {copiedNumber ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedNumber ? '¡Copiado!' : 'Copiar'}</span>
                  </button>
                </div>

                {/* Titular */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Titular de la cuenta:</span>
                    <span className="font-bold text-white text-sm">
                      {COURSE_PRICING.yapeTitular}
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verificado
                  </span>
                </div>

                {/* Amount */}
                <div className="p-2.5 rounded-xl bg-[#F1A80A]/10 border border-[#F1A80A]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#F1A80A]/80 block">Monto exacto a transferir:</span>
                    <span className="text-base sm:text-lg font-black text-[#F1A80A]">
                      S/ {COURSE_PRICING.discountedPrice}.00 PEN
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAmount}
                    className="px-2.5 py-1 rounded bg-[#F1A80A]/20 hover:bg-[#F1A80A]/30 text-[#F1A80A] text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedAmount ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedAmount ? '¡Listo!' : 'Copiar monto'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* High-Hierarchy Hand-off to WhatsApp CTA as required in PRD */}
            <div className="space-y-3">
              <button
                id="yape-done-whatsapp-cta"
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full py-4 sm:py-4.5 px-6 rounded-2xl font-black text-base sm:text-lg text-[#0B192C] bg-emerald-400 hover:brightness-110 transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/30 cursor-pointer border border-emerald-300/50"
              >
                <span className="text-xl">📲</span>
                <span>Ya Yapeé - Enviar Comprobante</span>
              </button>

              <p className="text-[11px] text-center text-slate-400 leading-normal">
                Al hacer clic, se abrirá WhatsApp con el mensaje predefinido para <strong>Engelberth Egoavil</strong>. Solo adjunta la foto de tu comprobante.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
