import { Scissors, Leaf, CheckCircle, Smartphone, ArrowRight, DoorOpen, Award, Users, Gift, Crown, Calendar, ChevronRight, Plus } from 'lucide-react';
import { useRef, useState } from 'react';
import Lightbox from './Lightbox';

interface BarbershopProps {
  onViewGallery?: () => void;
}

export default function Barbershop({ onViewGallery }: BarbershopProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryMedia = [
    "https://cdn.corenexis.com/f/7gm2EK6fpYb.jpg",
    "https://cdn.corenexis.com/f/Eaxuf3PFKzq.jpg",
    "https://cdn.corenexis.com/f/DJYCU1nRhLd.jpg",
    "https://cdn.corenexis.com/f/NkwlCZLpNKj.jpg"
  ];

  const services = [
    { name: "HAIRCUTS", price: "R70", desc: "Classic cuts, modern styles & everything in between.", img: "https://cdn.corenexis.com/f/VWKYNoL3CDC.jpg" },
    { name: "BEARD GROOMING", price: "R60", desc: "Shape. Sculpt. Perfect. Beard game strong.", img: "https://cdn.corenexis.com/f/s1HYy2Scxbe.jpg" },
    { name: "DYE & TRIM", price: "R70", desc: "Professional coloring and precision trimming for a fresh new look.", img: "https://cdn.corenexis.com/f/OfM5BMLKo19.jpg" },
    { name: "KIDS CUTS", price: "R50", desc: "Fresh styles for the little kings.", img: "https://cdn.corenexis.com/f/nyy87E5PkBy.jpg" },
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white pt-20">
      
      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://www.image2url.com/r2/default/videos/1782625792123-7bd18cc5-db92-45c2-93fb-11d60b98b604.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center h-full">
          <div className="absolute top-8 left-0 right-0 flex flex-col items-center w-full px-6 lg:top-12">
            <Scissors className="w-8 h-8 text-brand-olive mb-4" />
            <span className="text-brand-olive text-sm font-semibold tracking-[0.2em] uppercase block">The Barbershop</span>
          </div>
          
          <div className="flex flex-col items-center mb-12 lg:mb-0">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black uppercase text-white tracking-widest mb-6 leading-[0.9]">
              SHARP LOOKS.<br/>CLEAN CONFIDENCE.
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg lg:text-base font-sans lg:mb-10 max-w-2xl mx-auto font-light">
              Precision cuts. Expert barbers. A premium experience every time.
            </p>
          </div>

          <div className="absolute bottom-8 left-0 right-0 px-6 flex flex-row items-center justify-center gap-3 w-full lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:px-0 lg:w-auto lg:mt-10">
            <button className="w-1/2 lg:w-auto px-2 sm:px-10 py-4 bg-brand-olive hover:bg-brand-olive-dark text-[#0d0d0d] text-[11px] sm:text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap text-center">
              Book Appointment
            </button>
            <button className="w-1/2 lg:w-auto px-2 sm:px-10 py-4 border-2 border-black bg-transparent hover:bg-white/5 text-white text-[11px] sm:text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center whitespace-nowrap">
              View Services <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <Scissors className="w-6 h-6 text-brand-olive mb-3" />
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Expert Barbers</h4>
              <p className="text-xs text-zinc-400">Skilled. Experienced. Passionate.</p>
            </div>
            <div className="flex flex-col items-start">
              <Leaf className="w-6 h-6 text-brand-olive mb-3" />
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Premium Products</h4>
              <p className="text-xs text-zinc-400">Top brands. Top results.</p>
            </div>
            <div className="flex flex-col items-start">
              <CheckCircle className="w-6 h-6 text-brand-olive mb-3" />
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Clean Environment</h4>
              <p className="text-xs text-zinc-400">Your comfort is our priority.</p>
            </div>
            <div className="flex flex-col items-start">
              <Smartphone className="w-6 h-6 text-brand-olive mb-3" />
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Book Online</h4>
              <p className="text-xs text-zinc-400">Fast, easy & convenient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black tracking-widest uppercase">
                <span className="text-white">OUR</span> <span className="text-brand-olive">WORK</span>
              </h2>
              <p className="text-zinc-400 mt-2 text-sm md:text-base">Precision and style in every cut.</p>
            </div>
            {onViewGallery && (
              <button 
                onClick={onViewGallery}
                className="text-brand-olive text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
            {galleryMedia.map((media, idx) => {
              const isVideo = media.match(/\.(mp4|webm|mov)$/i);
              return (
                <div 
                  key={idx} 
                  className={`w-full bg-zinc-800 relative border border-white/5 cursor-pointer ${idx === 1 ? 'hidden sm:block' : ''}`}
                  onClick={() => setLightboxIndex(idx)}
                >
                  {isVideo ? (
                    <video autoPlay muted loop playsInline className="w-full h-auto object-cover">
                      <source src={media} />
                    </video>
                  ) : (
                    <img src={media} alt="Gallery Work" className="w-full h-auto object-cover" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox 
          mediaList={galleryMedia} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}

      {/* 4. OUR SERVICES SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-widest">
              <span className="text-white">OUR</span> <span className="text-brand-olive">SERVICES</span>
            </h2>
            <a href="#" className="text-brand-olive text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center">
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div 
            ref={scrollContainerRef}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8"
          >
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#141414] border border-white/5 group flex flex-col">
                <div className="h-48 w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${service.img})` }}>
                  <div className="w-full h-full bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">{service.name}</h3>
                  <p className="text-zinc-400 text-sm mb-6 flex-grow">{service.desc}</p>
                  <p className="text-brand-olive font-bold text-sm">{service.price}</p>
                  
                  <button className="absolute bottom-6 right-6 w-10 h-10 bg-brand-olive/10 hover:bg-brand-olive text-brand-olive hover:text-[#0d0d0d] transition-colors flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOK YOUR APPOINTMENT SECTION */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#141414] border border-white/5 overflow-hidden">
            <div className="p-10 md:p-16">
              <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white tracking-widest mb-6">
                Book Your <br/><span className="text-brand-olive">Appointment</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-md">
                Choose your barber, select a time that works for you, and we'll take care of the rest.
              </p>
              <button className="px-8 py-4 bg-brand-olive hover:bg-brand-olive-dark text-[#0d0d0d] text-sm font-bold uppercase tracking-widest transition-colors inline-flex items-center">
                Book Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="h-[400px] md:h-full w-full bg-[#1a1a1a] flex items-center justify-center p-8 relative overflow-hidden">
               {/* Mockup Phone Frame */}
               <div className="w-[280px] h-[580px] bg-[#0d0d0d] border-[8px] border-zinc-800 rounded-[3rem] relative shadow-2xl flex flex-col overflow-hidden translate-y-20 md:translate-y-16">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 w-32 mx-auto rounded-b-2xl z-20"></div>
                  
                  {/* Screen Content */}
                  <div className="flex-1 w-full bg-[#141414] p-5 pt-12 overflow-hidden">
                    <h4 className="font-display text-xl text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Select Time</h4>
                    <div className="space-y-4">
                      {/* Fake Calendar Grid */}
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs text-brand-olive font-bold uppercase">October 2026</span>
                         <div className="flex gap-2">
                           <div className="w-5 h-5 bg-zinc-800 flex items-center justify-center text-[10px]">&lt;</div>
                           <div className="w-5 h-5 bg-zinc-800 flex items-center justify-center text-[10px]">&gt;</div>
                         </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 mb-4 text-center">
                        {['S','M','T','W','T','F','S'].map((d, i) => (
                          <div key={i} className="text-[9px] text-zinc-500">{d}</div>
                        ))}
                        {Array.from({length: 14}).map((_, i) => (
                           <div key={i} className={`text-xs py-1 rounded-sm ${i === 8 ? 'bg-brand-olive text-black font-bold' : 'text-zinc-300'}`}>{i + 1}</div>
                        ))}
                      </div>
                      
                      {/* Fake Time Slots */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-zinc-800/50 border border-zinc-700 p-2 text-center text-xs text-white">09:00 AM</div>
                        <div className="bg-zinc-800/50 border border-zinc-700 p-2 text-center text-xs text-zinc-500 line-through">09:30 AM</div>
                        <div className="bg-brand-olive p-2 text-center text-xs text-black font-bold">10:00 AM</div>
                        <div className="bg-zinc-800/50 border border-zinc-700 p-2 text-center text-xs text-white">10:30 AM</div>
                      </div>
                      
                      <button className="w-full mt-4 bg-white text-black py-3 text-xs font-bold uppercase">Confirm</button>
                    </div>
                  </div>
               </div>
               
               {/* Decorative elements behind phone */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-olive/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEET OUR BARBERS */}
      <section className="py-20 px-6 relative bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.corenexis.com/f/iW3ZQFYHRpr.jpg')" }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white tracking-widest mb-2">
                MEET OUR <span className="text-brand-olive">BARBERS</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base">Talented. Dedicated. Here to elevate your look.</p>
            </div>
            <a href="#" className="text-brand-olive text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center">
              View Barbers <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Barber 1 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-zinc-800 mb-6 overflow-hidden border-2 border-transparent hover:border-brand-olive transition-colors relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 {/* Placeholder for barber image */}
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">Sbusiso</h3>
              <p className="text-brand-olive text-sm uppercase tracking-widest font-bold mb-2">Master Barber</p>
            </div>
            
            {/* Barber 2 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-zinc-800 mb-6 overflow-hidden border-2 border-transparent hover:border-brand-olive transition-colors relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 {/* Placeholder for barber image */}
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">Thabiso</h3>
              <p className="text-brand-olive text-sm uppercase tracking-widest font-bold mb-2">Senior Barber</p>
            </div>
            
            {/* Barber 3 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-zinc-800 mb-6 overflow-hidden border-2 border-transparent hover:border-brand-olive transition-colors relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 {/* Placeholder for barber image */}
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">Tshepo</h3>
              <p className="text-brand-olive text-sm uppercase tracking-widest font-bold mb-2">Style Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEMBERSHIPS & PACKAGES */}
      <section className="py-24 px-6 relative bg-black overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-olive/5 blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-widest mb-6 leading-tight">
                MEMBERSHIPS <br/><span className="text-brand-olive">& PACKAGES</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-md">
                More than a cut. It's a lifestyle. Save. Upgrade. Stay fresh with our exclusive grooming packages.
              </p>
              <a href="#" className="text-brand-olive text-sm font-bold uppercase tracking-widest hover:text-white transition-colors inline-flex items-center pb-1 border-b border-brand-olive hover:border-white">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="flex justify-center md:justify-end">
              {/* Membership Card Visual */}
              <div className="w-full max-w-md aspect-[1.6/1] bg-gradient-to-br from-zinc-800 to-[#050505] rounded-xl p-8 relative shadow-2xl border border-zinc-700/50 flex flex-col justify-between transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)] rounded-xl pointer-events-none"></div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display text-xl text-white tracking-widest uppercase">CUTS & PLUGS</h4>
                    <p className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase">Member</p>
                  </div>
                  <Crown className="w-8 h-8 text-brand-olive" />
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="font-mono text-zinc-500 tracking-widest">
                    001 024 098 882
                  </div>
                  <div className="w-12 h-8 bg-zinc-800 rounded-sm border border-zinc-700 flex items-center justify-center">
                    <div className="w-8 h-4 border border-zinc-600 rounded-[2px] opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM FEATURE BAR */}
      <section className="border-t border-white/5 bg-[#0d0d0d] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4 text-brand-olive">
                <DoorOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Walk-Ins Welcome</h4>
              <p className="text-xs text-zinc-500">Subject to availability</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4 text-brand-olive">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Loyalty Rewards</h4>
              <p className="text-xs text-zinc-500">Earn points every visit</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4 text-brand-olive">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Referral Program</h4>
              <p className="text-xs text-zinc-500">Bring a friend, get a discount</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4 text-brand-olive">
                <Gift className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Gift Cards</h4>
              <p className="text-xs text-zinc-500">The perfect gift for him</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

