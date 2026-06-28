import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LightboxProps {
  mediaList: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ mediaList, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const currentMedia = mediaList[currentIndex];
  const isVideo = currentMedia.match(/\.(mp4|webm|mov)$/i);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
      >
        <X className="w-8 h-8" />
      </button>

      {mediaList.length > 1 && (
        <>
          <button 
            onClick={showPrev}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-4"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button 
            onClick={showNext}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-4"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </>
      )}

      <div className="w-full h-full p-4 md:p-12 flex items-center justify-center" onClick={onClose}>
        <div 
          className="relative max-w-full max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {isVideo ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              controls
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            >
              <source src={currentMedia} />
            </video>
          ) : (
            <img 
              src={currentMedia} 
              alt="Gallery item" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
          )}
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm tracking-widest font-mono">
        {currentIndex + 1} / {mediaList.length}
      </div>
    </div>
  );
}
