import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/courseData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Casos de Éxito en Agencias de Viajes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Resultados Reales de <span className="text-[#F1A80A]">Colegas del Sector</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Descubre cómo otras agencias de viajes en Perú y Latinoamérica multiplicaron su velocidad operativa y ventas.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-white/5 border border-white/10 hover:border-[#F1A80A]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F1A80A]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F1A80A]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600" />
                </div>

                {/* Main Quote */}
                <p className="text-sm sm:text-base text-slate-300 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* Metric Gain Badge */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-5 flex items-center justify-between">
                  <span>{testimonial.result}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#F1A80A]/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {testimonial.role} • <span className="text-[#F1A80A]">{testimonial.agency}</span>
                    </p>
                    <p className="text-[11px] text-slate-500">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
