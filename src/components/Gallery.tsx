import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Lightbox from './Lightbox';

interface GalleryProps {
  onBack: () => void;
}

export default function Gallery({ onBack }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [
    "https://cdn.corenexis.com/f/F0D8bbAFxbN.jpg",
    "https://cdn.corenexis.com/f/7w2b9PoipZX.jpg",
    "https://cdn.corenexis.com/f/zZ6ZuJH6LWx.jpg",
    "https://cdn.corenexis.com/f/Fl1v9HvKEB1.jpg",
    "https://cdn.corenexis.com/f/7gm2EK6fpYb.jpg",
    "https://cdn.corenexis.com/f/Eaxuf3PFKzq.jpg",
    "https://cdn.corenexis.com/f/DJYCU1nRhLd.jpg",
    "https://cdn.corenexis.com/f/NkwlCZLpNKj.jpg"
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-zinc-400 hover:text-white transition-colors mb-10 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Barbershop
        </button>

        <div className="mb-12">
          <h1 className="font-display text-3xl md:text-6xl font-black tracking-widest uppercase mb-4">
            <span className="text-white">OUR</span> <span className="text-brand-olive">GALLERY</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">Precision cuts, expert styling, and premium grooming.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((media, idx) => {
            const isVideo = media.match(/\.(mp4|webm|mov)$/i);
            return (
              <div 
                key={idx} 
                className="w-full bg-zinc-800 relative border border-white/5 cursor-pointer group"
                onClick={() => setLightboxIndex(idx)}
              >
                {isVideo ? (
                  <video autoPlay muted loop playsInline className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity">
                    <source src={media} />
                  </video>
                ) : (
                  <img src={media} alt="Gallery Work" className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          mediaList={images} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}
    </div>
  );
}
