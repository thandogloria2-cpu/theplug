import { Menu, ShoppingBag, X, Instagram, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ isDispensary, onNavigateMain, onNavigateDispensary }: { isDispensary?: boolean, onNavigateMain?: () => void, onNavigateDispensary?: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0f1110] border-b border-white/5 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer" onClick={onNavigateMain}>
          {isDispensary ? (
            <img 
              src="https://www.image2url.com/r2/default/images/1779706529679-f4ac3508-e9f0-4021-8ae8-6c94746b81c6.png" 
              alt="The Plug." 
              className="h-10 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          ) : (
            <>
              <span className="font-display text-xl font-semibold tracking-widest text-white uppercase">
                Cuts & Plugs
              </span>
              <span className="text-[8px] tracking-widest text-[#a1a1aa] uppercase font-grotesk mt-1">
                Grooming • Wellness • Culture
              </span>
            </>
          )}
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className={`text-sm font-medium text-white border-b pb-1 ${isDispensary ? 'border-brand-neon' : 'border-brand-olive'}`}>HOME</a>
          <a href="#barbershop" className={`text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : ''}`} onClick={onNavigateMain}>Cuts & Plugs</a>
          <a href="#cannabis" className={`text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : ''}`}>CANNABIS</a>
          <a href="#shop" className={`text-sm font-medium text-zinc-400 hover:text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : ''}`}>SHOP</a>
          <a href="#book" className={`text-sm font-medium text-zinc-400 hover:text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : ''}`}>BOOK APPOINTMENT</a>
          <a href="#about" className={`text-sm font-medium text-zinc-400 hover:text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : ''}`}>ABOUT</a>
          <a href="#contact" className={`text-sm font-medium text-zinc-400 hover:text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : ''}`}>CONTACT</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className={`hidden md:block px-6 py-2 border text-sm font-medium transition-colors uppercase tracking-wider text-white ${isDispensary ? 'border-brand-neon hover:bg-brand-neon/10 hover:text-brand-neon' : 'border-brand-olive hover:bg-brand-olive/10'}`}>
            Membership
          </button>
          <button className={`p-2 text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 w-full bg-black overflow-y-auto"
          style={{ height: 'calc(100vh - 72px)' }}
        >
          <div className="flex flex-col items-center pt-16 pb-12 space-y-8">
            <a href="#" className={`text-xl font-medium text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`} onClick={() => { setIsMobileMenuOpen(false); if (onNavigateDispensary) onNavigateDispensary(); }}>Cannabis</a>
            <a href="#products" className={`text-xl font-medium text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`} onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#merch" className={`text-xl font-medium text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`} onClick={() => setIsMobileMenuOpen(false)}>Exclusive Merch</a>
            <a href="#education" className={`text-xl font-medium text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`} onClick={() => setIsMobileMenuOpen(false)}>Education</a>
            <a href="#about" className={`text-xl font-medium text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`} onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="#contact" className={`text-xl font-medium text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            <a href="#barbershop" className={`text-xl font-medium text-white transition-colors uppercase tracking-wider ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`} onClick={() => { setIsMobileMenuOpen(false); if (onNavigateMain) onNavigateMain(); }}>Cuts & Plugs</a>
            
            <div className="flex items-center justify-center space-x-6 pt-10 border-t border-white/10 w-48 mt-4">
              <a href="#" className={`text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`text-white transition-colors ${isDispensary ? 'hover:text-brand-neon' : 'hover:text-brand-olive'}`}>
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
