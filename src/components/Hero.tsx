import { Cannabis, Scissors, Users } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
}

export default function Hero({ onExploreProducts }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-24">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1779559134131-620386b3-c902-4efe-8f2c-4f3216c19546.jpg")' }}
      />
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex-1 flex flex-col items-center justify-center py-12">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Scissors className="w-8 h-8 text-brand-olive opacity-80" />
          <Cannabis className="w-8 h-8 text-brand-olive opacity-80" />
        </div>
        
        <h2 className="text-zinc-400 font-grotesk tracking-[0.3em] text-xs sm:text-sm uppercase mb-6 relative inline-block">
          <span className="hidden sm:block absolute -left-12 top-1/2 w-8 border-t border-brand-olive"></span>
          One Space. Two Experiences.
          <span className="hidden sm:block absolute -right-12 top-1/2 w-8 border-t border-brand-olive"></span>
        </h2>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
          Precision Grooming<br />Meets Elevated Lifestyle
        </h1>
        
        <p className="text-zinc-300 tracking-[0.2em] uppercase font-grotesk text-xs sm:text-sm mb-12 drop-shadow">
          Barbershop • Cannabis Dispensary
        </p>

        <div className="flex flex-row items-stretch justify-center gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 mx-auto max-w-sm sm:max-w-none">
          <button className="flex-1 sm:flex-none sm:w-56 px-2 sm:px-8 py-2.5 sm:py-4 bg-brand-olive border border-transparent hover:bg-brand-olive-dark text-white font-medium uppercase tracking-widest text-[9px] sm:text-sm transition-colors flex items-center justify-center text-center">
            Book Now
          </button>
          <button 
            onClick={onExploreProducts}
            className="flex-1 sm:flex-none sm:w-56 px-2 sm:px-8 py-2.5 sm:py-4 bg-black border border-brand-olive hover:bg-black/80 text-white font-medium uppercase tracking-widest text-[9px] sm:text-sm transition-colors flex items-center justify-center text-center"
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* Bottom Features Bar */}
      <div className="relative z-20 w-full border-t border-white/10 bg-brand-darker/60 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center space-x-3">
            <Scissors className="w-5 h-5 text-brand-olive" />
            <span className="text-xs text-zinc-300 uppercase tracking-widest font-grotesk">Premium Services</span>
          </div>
          <div className="flex items-center space-x-3">
            <Cannabis className="w-5 h-5 text-brand-olive" />
            <span className="text-xs text-zinc-300 uppercase tracking-widest font-grotesk">Quality Products</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-brand-olive" />
            <span className="text-xs text-zinc-300 uppercase tracking-widest font-grotesk">Good People & Good Vibes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
