import React, { useState } from 'react';
import { Lock, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginGateProps {
  onVerified: () => void;
}

export function LoginGate({ onVerified }: LoginGateProps) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() })
      });
      const data = await res.json();

      if (data.success) {
        onVerified();
      } else {
        setError(data.error || 'Código inválido. Intente de nuevo.');
      }
    } catch (err) {
      setError('Error al verificar el código. Intente de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B192C] flex flex-col items-center justify-center p-4 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="dark-card p-8 md:p-10 rounded-3xl w-full max-w-md relative z-10 glow-indigo"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl mb-6 shadow-indigo-600/30">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Acceso Exclusivo</h1>
          <p className="text-slate-400 text-sm">
            Ingresa tu código de partner de <span className="text-indigo-400 font-semibold">Lifextreme</span> para acceder a la plataforma.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <input 
                type="text" 
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Ingresa tu código" 
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono text-center tracking-widest text-lg"
                disabled={isLoading}
              />
            </div>
          </div>
          
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg flex items-center gap-2"
            >
              <XCircle className="w-4 h-4 shrink-0" />
              {error}
            </motion.div>
          )}

          <button 
            type="submit" 
            disabled={isLoading || !code.trim()}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 group"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Verificar Código
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500">
            Desarrollado para <span className="font-semibold text-slate-300">Lifextreme.store</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
