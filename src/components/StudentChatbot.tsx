import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Phone, 
  ChevronDown,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { ChatMessage } from '../types';
import { COURSE_PRICING } from '../data/courseData';

interface StudentChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenCheckout: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    role: 'assistant',
    content: '¡Hola! Soy **Aria**, asistente virtual de admisiones del **Curso de IA para Agencias de Viajes** con Engelberth Egoavil.\n\n¿En qué puedo orientarte hoy? Puedes preguntarme sobre el temario, cómo funciona el **mes de asesoría VIP** o el proceso de pago por Yape.',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

const SUGGESTED_QUESTIONS = [
  '🔥 ¿Cómo funciona el mes de asesoría VIP?',
  '💳 ¿Cómo realizo el pago por Yape?',
  '📚 ¿Qué incluye el temario de 7 soluciones?',
  '✈️ ¿Sirve para agencias de viajes freelance?',
];

export const StudentChatbot: React.FC<StudentChatbotProps> = ({ isOpen, onToggle, onOpenCheckout }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputValue).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      // Send to server-side Gemini API
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageContent,
          conversationHistory: messages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const botReply = data.reply || '¡Con gusto te ayudamos! Puedes reservar tu cupo ahora mismo por Yape al +51 958050928.';

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: '¡Hola! Puedes asegurar tu cupo por Yape al +51 958050928 a nombre de Engelberth Egoavil por S/ 147 PEN. ¿Deseas abrir la pasarela de inscripción?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Simple Markdown-like formatter for bold and lists
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Replace **text** with <strong>
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className={idx > 0 ? 'mt-1.5' : ''}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="text-amber-300 font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button (when closed) */}
      {!isOpen && (
        <button
          id="chatbot-floating-btn"
          onClick={onToggle}
          className="fixed bottom-5 right-5 z-40 p-3.5 sm:p-4 rounded-full bg-[#F1A80A] text-[#0B192C] shadow-[0_0_25px_rgba(241,168,10,0.4)] hover:brightness-110 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer border border-[#F1A80A]/40 group"
          aria-label="Abrir asistente virtual del curso"
        >
          <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-[#0B192C]" />
          
          {/* Notification Badge */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0B192C] animate-bounce">
              {unreadCount}
            </span>
          )}

          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0B192C] text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            💬 ¿Dudas? Asistente IA 24/7
          </span>
        </button>
      )}

      {/* Main Chatbot Floating Window */}
      {isOpen && (
        <div 
          id="student-chatbot-window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[400px] h-[560px] max-h-[85vh] rounded-2xl sm:rounded-3xl bg-[#0B192C] border border-white/15 shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-fadeIn backdrop-blur-xl"
        >
          {/* Chat Header */}
          <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#F1A80A]/15 border border-[#F1A80A]/30 flex items-center justify-center text-[#F1A80A]">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0B192C]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-black text-white">Aria • Asistente IA</h4>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/10 text-slate-300 border border-white/10">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Orientación y Admisiones del Curso</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                title="Reiniciar chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onToggle}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Info Bar */}
          <div className="bg-[#F1A80A]/10 px-3.5 py-1.5 border-b border-[#F1A80A]/20 flex items-center justify-between text-[11px]">
            <span className="text-[#F1A80A] font-medium">🔥 Oferta activa: S/ 147 PEN</span>
            <button
              onClick={onOpenCheckout}
              className="text-[#F1A80A] font-bold hover:underline flex items-center gap-0.5"
            >
              <span>Ir al Pago Yape</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                      isUser
                        ? 'bg-[#F1A80A] text-[#0B192C] font-semibold rounded-br-none shadow-md'
                        : 'bg-white/5 text-slate-200 border border-white/10 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {renderFormattedText(msg.content)}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 text-[#F1A80A] bg-white/5 p-3 rounded-2xl rounded-bl-none w-max border border-white/10">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span className="text-xs font-mono animate-pulse">Aria escribiendo respuesta...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          <div className="px-3 py-2 bg-white/5 border-t border-white/10 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:border-[#F1A80A] hover:text-[#F1A80A] transition-colors shrink-0 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <div className="p-3 bg-white/5 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Haz una pregunta sobre el curso..."
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F1A80A] transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 rounded-xl bg-[#F1A80A] text-[#0B192C] font-bold hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
