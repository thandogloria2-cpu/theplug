import { Calendar, Droplets, Leaf, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface DualServicesProps {
  onExploreProducts?: () => void;
  onViewServices?: () => void;
}

export default function DualServices({ onExploreProducts, onViewServices }: DualServicesProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* Barbershop Block */}
        <div id="barbershop" className="border border-white/5 bg-brand-darker/60 backdrop-blur-md relative overflow-hidden flex flex-col group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-transparent z-10 pointer-events-none" />
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-[0.89] transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1779565263756-aa79e756-9fe0-4dd7-9e8a-f714791638d2.jpg")' }}
          />
          
          <div className="relative z-20 p-10 flex-grow flex flex-col justify-center">
            <p className="text-brand-olive font-grotesk tracking-widest text-xs uppercase mb-3">The Barbershop</p>
            <h2 className="font-display text-4xl text-white uppercase leading-tight mb-8">
              Sharp Looks.<br />Clean Confidence.
            </h2>
            
            <ul className="space-y-3 mb-10 text-sm font-sans text-zinc-300">
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Haircuts & Fades</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Beard Grooming</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Straight Razor Shaves</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Kids Cuts</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Custom Styling</li>
            </ul>
            
            <div className="mt-auto">
              <button 
                onClick={onViewServices}
                className="px-6 py-3 border border-brand-olive hover:bg-brand-olive/10 text-white text-xs font-medium uppercase tracking-widest transition-colors backdrop-blur-sm"
              >
                VIEW BARBERSHOP
              </button>
            </div>
          </div>

          <div className="relative z-20 border-t border-white/10 bg-black/40 backdrop-blur-md p-4 lg:p-6 grid grid-cols-3 gap-1 lg:gap-4">
            <div className="flex flex-col items-center text-center px-1">
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-brand-olive mb-2" />
              <span className="text-[8px] lg:text-[9px] xl:text-[10px] uppercase font-grotesk tracking-wider lg:tracking-widest text-white leading-tight">Book Online</span>
              <span className="text-[8px] lg:text-[10px] text-zinc-500 mt-1 leading-tight">Fast & Easy</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-white/10 px-1">
              <UserCheck className="w-4 h-4 lg:w-5 lg:h-5 text-brand-olive mb-2" />
              <span className="text-[8px] lg:text-[9px] xl:text-[10px] uppercase font-grotesk tracking-wider lg:tracking-widest text-white leading-tight">Expert Barbers</span>
              <span className="text-[8px] lg:text-[10px] text-zinc-500 mt-1 leading-tight">Skilled Professionals</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-white/10 px-1">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-brand-olive mb-2" />
              <span className="text-[8px] lg:text-[9px] xl:text-[10px] uppercase font-grotesk tracking-wider lg:tracking-widest text-white leading-tight">Premium Experience</span>
              <span className="text-[8px] lg:text-[10px] text-zinc-500 mt-1 leading-tight">Every Time</span>
            </div>
          </div>
        </div>

        {/* Dispensary Block */}
        <div id="cannabis" className="border border-white/5 bg-brand-darker/60 backdrop-blur-md relative overflow-hidden flex flex-col group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-transparent z-10 pointer-events-none" />
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-[0.89] transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1779622925964-b99feeb0-492b-410c-bae9-fc357d47d3a9.png")' }}
          />
          
          <div className="relative z-20 p-10 flex-grow flex flex-col justify-center">
            <p className="text-brand-olive font-grotesk tracking-widest text-xs uppercase mb-3">The Dispensary</p>
            <h2 className="font-display text-4xl text-white uppercase leading-tight mb-8">
              Quality Flower.<br />Elevated Wellness.
            </h2>
            
            <ul className="space-y-3 mb-10 text-sm font-sans text-zinc-300">
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Premium Flower</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Concentrates</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Edibles</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Accessories</li>
              <li className="flex items-center"><span className="mr-3 text-brand-olive">✓</span> Education</li>
            </ul>
            
            <div className="mt-auto">
              <button 
                onClick={onExploreProducts}
                className="px-6 py-3 border border-brand-olive hover:bg-brand-olive/10 text-white text-xs font-medium uppercase tracking-widest transition-colors backdrop-blur-sm"
              >
                Explore Products
              </button>
            </div>
          </div>

          <div className="relative z-20 border-t border-white/10 bg-black/40 backdrop-blur-md p-4 lg:p-6 grid grid-cols-3 gap-1 lg:gap-4">
            <div className="flex flex-col items-center text-center px-1">
              <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-brand-olive mb-2" />
              <span className="text-[8px] lg:text-[9px] xl:text-[10px] uppercase font-grotesk tracking-wider lg:tracking-widest text-white leading-tight">Lab Tested</span>
              <span className="text-[8px] lg:text-[10px] text-zinc-500 mt-1 leading-tight">Quality You Can Trust</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-white/10 px-1">
              <Droplets className="w-4 h-4 lg:w-5 lg:h-5 text-brand-olive mb-2" />
              <span className="text-[8px] lg:text-[9px] xl:text-[10px] uppercase font-grotesk tracking-wider lg:tracking-widest text-white leading-tight">Curated Selection</span>
              <span className="text-[8px] lg:text-[10px] text-zinc-500 mt-1 leading-tight">Top Shelf Only</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-white/10 px-1">
              <Leaf className="w-4 h-4 lg:w-5 lg:h-5 text-brand-olive mb-2" />
              <span className="text-[8px] lg:text-[9px] xl:text-[10px] uppercase font-grotesk tracking-wider lg:tracking-widest text-white leading-tight">Knowledgeable Staff</span>
              <span className="text-[8px] lg:text-[10px] text-zinc-500 mt-1 leading-tight">Here To Help</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
