import React, { useState } from 'react';
import { Play, ExternalLink, Sparkles, CheckCircle2, Clock, Eye, Video } from 'lucide-react';
import { YOUTUBE_SHOWCASE } from '../data/courseData';
import { VideoItem } from '../types';

interface VideoGalleryProps {
  onOpenVideoModal: (videoId: string) => void;
}

export const VideoGallerySection: React.FC<VideoGalleryProps> = ({ onOpenVideoModal }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(YOUTUBE_SHOWCASE[0]);

  return (
    <section id="demostracion" className="py-20 md:py-28 bg-[#0B192C] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1A80A]/10 border border-[#F1A80A]/30 text-[#F1A80A] text-xs font-bold uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>Demostraciones Prácticas en Video</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Mira la <span className="text-[#F1A80A]">IA en Acción</span> para Agencias de Viajes
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Comprueba en tiempo real cómo estas herramientas resuelven cotizaciones, automatizan WhatsApp y crean contenido turístico en segundos.
          </p>
        </div>

        {/* Main Video Stage & Playlist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Featured Video Player / Embed */}
          <div className="lg:col-span-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl shadow-black/80">
            {/* Interactive Video Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=0&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Meta Info */}
            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#F1A80A]/10 text-[#F1A80A] border border-[#F1A80A]/30">
                  {selectedVideo.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedVideo.duration}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                {selectedVideo.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Módulo 100% replicable en tu agencia</span>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#F1A80A] hover:underline font-semibold transition-colors"
                >
                  <span>Ver en YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              Más Lecciones & Demos del Curso
            </h4>

            {YOUTUBE_SHOWCASE.map((video) => {
              const isSelected = selectedVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  id={`video-item-${video.id}`}
                  onClick={() => setSelectedVideo(video)}
                  className={`group p-3.5 rounded-xl border transition-all cursor-pointer flex gap-3.5 items-center ${
                    isSelected
                      ? 'bg-white/10 border-[#F1A80A]/60 shadow-lg shadow-black/40'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Video Thumbnail */}
                  <div className="relative w-28 h-18 rounded-lg overflow-hidden shrink-0 bg-slate-950">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#F1A80A] text-[#0B192C]' : 'bg-white/80 text-black'}`}>
                        <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-[10px] font-mono text-white">
                      {video.duration}
                    </span>
                  </div>

                  {/* Video Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-[#F1A80A]">
                      {video.category}
                    </span>
                    <h5 className={`text-xs sm:text-sm font-bold line-clamp-2 mt-0.5 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {video.title}
                    </h5>
                  </div>
                </div>
              );
            })}

            {/* Value Callout */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <p className="font-semibold text-[#F1A80A] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Acceso Vitalicio a Grabaciones
              </p>
              <p>
                Todas las clases se graban en 1080p con ficheros descargables de prompts y esquemas No-Code para que los repitas las veces que necesites.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
