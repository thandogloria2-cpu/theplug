import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer({ isDispensary = false }: { isDispensary?: boolean }) {
  return (
    <footer className={`${isDispensary ? 'bg-black border-t border-brand-neon/20' : 'bg-brand-darker/80 backdrop-blur-md border-t border-white/5'} pt-16 pb-8 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isDispensary ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-12 lg:gap-8 mb-16`}>
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start mb-6">
              {isDispensary ? (
                <>
                  <img 
                    src="https://www.image2url.com/r2/default/images/1779706529679-f4ac3508-e9f0-4021-8ae8-6c94746b81c6.png" 
                    alt="The Plug." 
                    className="h-12 w-auto object-contain object-left mb-2 self-start" 
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[10px] tracking-widest text-brand-neon uppercase font-black mt-1 border-t border-brand-neon/20 pt-2 w-fit text-left">
                    GOOD CONNECTIONS. HIGHER VIBES.
                  </span>
                </>
              ) : (
                <>
                  <span className="font-display text-xl font-semibold tracking-widest text-white uppercase leading-none">
                    Cuts & Plugs
                  </span>
                  <span className="text-[8px] tracking-widest text-brand-olive uppercase font-grotesk mt-1 border-t border-white/10 pt-2 w-fit">
                    Grooming • Wellness • Culture
                  </span>
                </>
              )}
            </div>
            <p className="text-zinc-400 text-sm mb-6 max-w-sm leading-relaxed">
              {isDispensary 
                ? "A premium street cannabis brand built on quality, community, and unfiltered energy." 
                : "A premium barbershop and cannabis dispensary built on quality, community and culture."}
            </p>
            <div className="flex space-x-4 text-zinc-400">
              <a href="#" className={`transition-colors ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`transition-colors ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className={`transition-colors ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
                <Twitter className="w-5 h-5" />
              </a>
              {/* WhatsApp custom icon placeholder */}
              <a href="#" className={`transition-colors outline-none flex items-center justify-center w-5 h-5 ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-white font-grotesk tracking-widest text-xs uppercase mb-6 ${isDispensary ? 'text-brand-neon font-black' : ''}`}>Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Home</a></li>
              <li><a href="#barbershop" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Barbershop</a></li>
              <li><a href="#cannabis" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Cannabis</a></li>
              <li><a href="#shop" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Shop</a></li>
              <li><a href="#about" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>About Us</a></li>
              <li><a href="#contact" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Contact</a></li>
            </ul>
          </div>

          {/* Services Group */}
          {!isDispensary && (
            <div className="flex flex-col gap-8">
              <div>
                <h4 className={`text-white font-grotesk tracking-widest text-xs uppercase mb-6 ${isDispensary ? 'text-brand-neon font-black' : ''}`}>Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Haircuts & Fades</a></li>
                  <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Beard Grooming</a></li>
                  <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Shaves</a></li>
                  <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Kids Cuts</a></li>
                  <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Styling</a></li>
                </ul>
              </div>
            </div>
          )}

          <div>
             <h4 className={`text-white font-grotesk tracking-widest text-xs uppercase mb-6 ${isDispensary ? 'text-brand-neon font-black' : ''}`}>Cannabis</h4>
              <ul className="space-y-3">
                <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Flower</a></li>
                <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Concentrates</a></li>
                <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Edibles</a></li>
                <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Accessories</a></li>
                <li><a href="#" className={`text-zinc-400 text-sm transition-colors ${isDispensary ? 'hover:text-brand-neon font-bold' : 'hover:text-white'}`}>Education</a></li>
              </ul>
          </div>

        </div>

        {/* Newsletter & Legal */}
        <div className={`border-t ${isDispensary ? 'border-brand-neon/20' : 'border-white/5'} pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6`}>
          <div className="w-full lg:w-1/3">
            <h4 className={`text-white font-grotesk tracking-widest text-xs uppercase mb-4 ${isDispensary ? 'text-brand-neon font-black' : ''}`}>Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">Stay updated with new drops, events and exclusive offers.</p>
            <div className="flex w-full">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`bg-brand-dark border text-white px-4 py-2 text-sm focus:outline-none w-full ${isDispensary ? 'border-brand-neon/30 focus:border-brand-neon' : 'border-white/10 focus:border-brand-olive'}`}
              />
              <button className={`px-4 flex items-center justify-center transition-colors ${isDispensary ? 'bg-brand-neon text-black hover:bg-brand-neon-dark' : 'bg-brand-olive hover:bg-brand-olive-dark text-white'}`}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full lg:w-auto gap-4 mt-8 lg:mt-0">
             <p className="text-zinc-500 text-xs">
              © {new Date().getFullYear()} {isDispensary ? 'The Plug' : 'Cuts & Plugs'}. All rights reserved.
            </p>
            <div className={`flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-wider font-grotesk ${isDispensary ? 'text-brand-neon/50' : ''}`}>
              <span>18+ ONLY. PLEASE CONSUME RESPONSIBLY.</span>
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-[10px] ${isDispensary ? 'border-brand-neon/50' : 'border-zinc-500'}`}>
                18+
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
