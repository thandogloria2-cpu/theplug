import React, { useState, useEffect } from 'react';
import { Leaf, ShieldCheck, Search, EyeOff, ArrowRight, Plus, Star, X, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function ProductCard({ 
  mediaSrc, 
  mediaType = 'video',
  type, 
  title, 
  description, 
  thc, 
  price,
  overlayClass = "via-[#0a0a0a]/60",
  onClick,
  onAddCart
}: { 
  mediaSrc?: string, 
  mediaType?: 'video' | 'image',
  type: string, 
  title: string, 
  description: string, 
  thc: string, 
  price: string,
  overlayClass?: string,
  onClick?: () => void,
  onAddCart?: (e: React.MouseEvent) => void
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    if (mediaType !== 'video') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, [mediaType]);

  React.useEffect(() => {
    if (mediaType !== 'video') return;
    // Determine if it should play.
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (videoRef.current) {
      if ((isDesktop && isHovered) || (!isDesktop && isInView)) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, isInView, mediaType]);

  return (
    <div 
      className="bg-[#0a0a0a] border-2 border-zinc-900 overflow-hidden hover:border-brand-neon p-6 group flex flex-col justify-end h-[380px] transition-all duration-300 shadow-xl relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {mediaType === 'video' ? (
        <video 
          ref={videoRef}
          src={mediaSrc} 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.6] group-hover:opacity-100 transition-all duration-500 pointer-events-none" 
        />
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.6] group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
          style={{ backgroundImage: `url("${mediaSrc}")` }}
        />
      )}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] ${overlayClass} to-transparent pointer-events-none`}></div>
      <div className="relative z-10 w-full flex flex-col h-full justify-end">
        <div>
          <p className="text-[9px] text-brand-neon uppercase font-black tracking-widest mb-2 bg-brand-neon/10 inline-block px-2 py-1">{type}</p>
          <h3 className="font-display text-xl font-bold uppercase mb-1 text-white group-hover:text-brand-neon transition-colors">{title}</h3>
          <p className="text-[11px] text-zinc-300 font-medium tracking-wide mb-1">{description}</p>
          <p className="text-[10px] text-brand-neon font-black tracking-wider mb-5">THC {thc}</p>
        </div>
        
        <div className="flex items-center justify-between border-t-2 border-zinc-900/50 pt-4 mt-auto">
          <div className="text-lg font-black text-white font-display">
            {price}
          </div>
          <button 
            onClick={onAddCart}
            className="w-10 h-10 rounded border-2 border-zinc-800 bg-[#0a0a0a]/50 backdrop-blur-sm flex items-center justify-center hover:bg-brand-neon hover:text-black hover:border-brand-neon transition-all text-brand-neon shadow-[0_0_10px_rgba(57,255,20,0)] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] z-50">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export type Product = {
  id: string;
  name: string;
  category: string;
  type: string;
  price: string;
  thc: string;
  description: string;
  image?: string;
  videoUrl?: string;
  overlayClass?: string;
};

export const PRODUCTS: Product[] = [
  // Heavy Hitters
  { id: '1', name: 'Moonsticks', category: 'Pre-Rolls', type: 'Indica', price: 'R80', thc: '28%', description: 'Calming // Relaxing', videoUrl: 'https://www.image2url.com/r2/default/videos/1780471728002-da90e8a4-ceff-4b9b-b64c-573a647d7182.mp4', overlayClass: 'via-[#0a0a0a]/20' },
  { id: '2', name: 'El Chapo', category: 'Flower', type: 'Hybrid', price: 'R250', thc: '26%', description: 'Euphoric // Happy', videoUrl: 'https://www.image2url.com/r2/default/videos/1780473672210-a9021a6e-f7bd-4bac-9bd9-cb366c04955b.mp4', overlayClass: 'via-[#0a0a0a]/20' },
  { id: '3', name: 'Durban Poison', category: 'Flower', type: 'Sativa', price: 'R120', thc: '22%', description: 'Energetic // Focused', videoUrl: 'https://www.image2url.com/r2/default/videos/1780474048280-8d33049e-d66f-4fc1-98c2-3fd8e3949b19.mp4', overlayClass: 'via-[#0a0a0a]/20' },
  
  // Other Products
  { id: '4', name: 'Gummy Bears 500mg', category: 'Edibles', type: 'Hybrid', price: 'R150', thc: '500mg', description: 'Sweet // Potent', image: 'https://www.image2url.com/r2/default/images/1780463238453-739fe6bd-a92d-44c2-a3b5-3945cad28bfc.jpg' },
  { id: '5', name: 'Sour Belts 1000mg', category: 'Edibles', type: 'Sativa', price: 'R250', thc: '1000mg', description: 'Sour // Elevating', image: 'https://www.image2url.com/r2/default/images/1780463238453-739fe6bd-a92d-44c2-a3b5-3945cad28bfc.jpg' },
  { id: '7', name: 'Infused Pre-Roll', category: 'Pre-Rolls', type: 'Indica', price: 'R150', thc: '35%', description: 'Heavy // Relaxing', image: 'https://www.image2url.com/r2/default/images/1780465538854-ee3e4f95-7d5b-4dd0-944a-7da8a668eb84.jpeg' },
  { id: '8', name: 'Disposable Vape 1G', category: 'Vapes', type: 'Sativa', price: 'R450', thc: '85%', description: 'Discreet // Energetic', image: 'https://www.image2url.com/r2/default/images/1780467817475-207af7eb-8f58-44c4-ba98-c77fe9887682.jpeg' },
  { id: '9', name: 'Live Resin Cart 1G', category: 'Vapes', type: 'Indica', price: 'R550', thc: '90%', description: 'Pure // Sedating', image: 'https://www.image2url.com/r2/default/images/1780467817475-207af7eb-8f58-44c4-ba98-c77fe9887682.jpeg' },
];

export default function Dispensary() {
  const [fullscreenImages, setFullscreenImages] = useState<{url: string, type: 'image' | 'video'}[] | null>(null);
  const [fullscreenInitialSlide, setFullscreenInitialSlide] = useState<number>(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const [view, setView] = useState<'home' | 'menu' | 'category' | 'product'>('home');
  const [history, setHistory] = useState<string[]>(['home']);
  
  const navigateToView = (newView: 'home' | 'menu' | 'category' | 'product', isBack: boolean = false) => {
    if (!isBack) {
      setHistory(prev => [...prev, newView]);
    }
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // remove current
      const prevView = newHistory[newHistory.length - 1] as 'home' | 'menu' | 'category' | 'product';
      setHistory(newHistory);
      setView(prevView);
    } else {
      setView('home');
    }
    window.scrollTo(0, 0);
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart([...cart, product]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const navigateToCategory = (category: string) => {
    setSelectedCategory(category);
    navigateToView('category');
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    navigateToView('product');
  };

  const navigateToHome = () => {
    navigateToView('home');
  };

  const navigateToMenu = () => {
    navigateToView('menu');
  };

  const heroMedia = [
    { type: 'image', url: "https://www.image2url.com/r2/default/images/1780423369990-f2f04a7d-c012-4418-93a9-13cac6e0a1c3.jpeg" },
    { type: 'image', url: "https://www.image2url.com/r2/default/images/1780426722014-88534035-f54c-4325-942e-f3a87e3e49f7.jpeg" },
    { type: 'image', url: "https://www.image2url.com/r2/default/images/1780429656800-c29cceea-a7a2-461f-bfd2-b10672e69276.jpeg" }
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  if (view === 'menu') {
    return (
      <div className="bg-black min-h-screen text-white pb-20 font-sans pt-24">
        <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="flex items-center mb-10">
            <button onClick={handleBack} className="flex items-center text-zinc-400 hover:text-brand-neon transition-colors font-bold tracking-widest uppercase text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-white tracking-widest mb-10">
            Full <span className="text-brand-neon">Menu</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                mediaSrc={product.videoUrl || product.image}
                mediaType={product.videoUrl ? 'video' : 'image'}
                type={`${product.category} · ${product.type}`}
                title={product.name}
                description={product.description}
                thc={product.thc}
                price={product.category === 'Flower' ? `${product.price} / 3.5G` : product.price}
                overlayClass={product.overlayClass || `via-[#0a0a0a]/60`}
                onClick={() => navigateToProduct(product)}
                onAddCart={(e) => addToCart(product, e)}
              />
            ))}
          </div>
        </section>
        {showToast && (
          <div className="fixed bottom-6 right-6 z-[200] bg-brand-neon text-black px-6 py-3 rounded font-bold uppercase tracking-widest border border-green-400 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
            Added to Cart!
          </div>
        )}
      </div>
    );
  }

  if (view === 'category' && selectedCategory) {
    const categoryProducts = PRODUCTS.filter(p => p.category === selectedCategory);
    return (
      <div className="bg-black min-h-screen text-white pb-20 font-sans pt-24">
        <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="flex items-center mb-10">
            <button onClick={handleBack} className="flex items-center text-zinc-400 hover:text-brand-neon transition-colors font-bold tracking-widest uppercase text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-white tracking-widest mb-10">
            {selectedCategory} <span className="text-brand-neon">Selection</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map(product => (
              <ProductCard
                key={product.id}
                mediaSrc={product.videoUrl || product.image}
                mediaType={product.videoUrl ? 'video' : 'image'}
                type={product.type}
                title={product.name}
                description={product.description}
                thc={product.thc}
                price={product.category === 'Flower' ? `${product.price} / 3.5G` : product.price}
                overlayClass={product.overlayClass || `via-[#0a0a0a]/60`}
                onClick={() => navigateToProduct(product)}
                onAddCart={(e) => addToCart(product, e)}
              />
            ))}
          </div>
        </section>
        {showToast && (
          <div className="fixed bottom-6 right-6 z-[200] bg-brand-neon text-black px-6 py-3 rounded font-bold uppercase tracking-widest border border-green-400 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
            Added to Cart!
          </div>
        )}
      </div>
    );
  }

  if (view === 'product' && selectedProduct) {
    return (
      <div className="bg-black min-h-screen text-white pb-20 font-sans pt-24">
        <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="flex items-center mb-10">
            <button onClick={handleBack} className="flex items-center text-zinc-400 hover:text-brand-neon transition-colors font-bold tracking-widest uppercase text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border-2 border-zinc-900 bg-[#0a0a0a] lg:sticky lg:top-24">
              {selectedProduct.videoUrl ? (
                <video src={selectedProduct.videoUrl} autoPlay loop muted playsInline className="w-full aspect-square object-cover pointer-events-none" />
              ) : (
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full aspect-square object-cover pointer-events-none" />
              )}
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-6 flex gap-3">
                <span className="px-3 py-1 bg-brand-neon/10 text-brand-neon text-xs font-black tracking-widest uppercase border border-brand-neon/20 rounded-sm">
                  {selectedProduct.category}
                </span>
                <span className="px-3 py-1 bg-zinc-900 text-zinc-300 text-xs font-black tracking-widest uppercase border border-zinc-800 rounded-sm">
                  {selectedProduct.type}
                </span>
                <span className="px-3 py-1 bg-zinc-900 text-zinc-300 text-xs font-black tracking-widest uppercase border border-zinc-800 rounded-sm">
                  THC {selectedProduct.thc}
                </span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-white mb-4">
                {selectedProduct.name}
              </h1>
              
              <p className="text-zinc-400 text-lg mb-8 max-w-xl font-medium tracking-wide">
                Experience the finest quality {selectedProduct.category.toLowerCase()} with {selectedProduct.name}. Known for its {selectedProduct.description.toLowerCase().replace('//', 'and')} properties, this is a top-shelf choice for those who demand the best.
              </p>
              
              <div className="flex items-end mb-8 space-x-4">
                <h2 className="font-display text-4xl text-brand-neon font-black">{selectedProduct.price}</h2>
                <span className="text-zinc-500 font-bold mb-1 opacity-70">/ {selectedProduct.category === 'Flower' ? '3.5G' : 'EACH'}</span>
              </div>
              
              <button 
                onClick={(e) => addToCart(selectedProduct, e)}
                className="w-full md:w-auto bg-brand-neon hover:bg-brand-neon-dark text-black px-12 py-5 font-black uppercase tracking-widest text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(57,255,20,0.3)] flex items-center justify-center">
                 Add to Stash <Plus className="w-6 h-6 ml-3" />
              </button>

              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-900 pt-8">
                 <div className="flex flex-col">
                   <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-1">Quality</span>
                   <span className="text-white font-medium">Premium Grade</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-1">Testing</span>
                   <span className="text-white font-medium">Lab Verified</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-1">Effects</span>
                   <span className="text-white font-medium">{selectedProduct.description.split('//')[0]}</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-1">Delivery</span>
                   <span className="text-white font-medium">Discreet Packaging</span>
                 </div>
              </div>
            </div>
          </div>
        </section>
        {showToast && (
          <div className="fixed bottom-6 right-6 z-[200] bg-brand-neon text-black px-6 py-3 rounded font-bold uppercase tracking-widest border border-green-400 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
            Added to Cart!
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white pb-20 font-sans selection:bg-brand-neon selection:text-black">
      
      {/* Hero Section */}
      <section className="relative w-full mb-16">
        <div className="relative h-[600px] md:h-[700px] w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Background Images and Videos */}
          {heroMedia.map((media, idx) => (
            media.type === 'image' ? (
              <img 
                key={idx}
                src={media.url}
                alt="Hero background"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ) : (
              <video
                key={idx}
                src={media.url}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            )
          ))}
          
          <div className="absolute top-[18%] md:top-[15%] w-full z-20 flex justify-center">
            <div className="flex items-center text-brand-neon text-sm md:text-xl font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase space-x-3 drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
              <Leaf className="w-6 h-6 md:w-8 md:h-8" />
              <span>Premium Cannabis</span>
            </div>
          </div>
          
          <div className="absolute bottom-12 z-10 px-6 sm:px-8 lg:px-16 w-full flex justify-center">
            <button onClick={navigateToMenu} className="px-10 py-4 bg-brand-neon hover:bg-brand-neon-dark text-black text-sm font-extrabold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
              Explore Products
            </button>
          </div>
        </div>

        {/* Intro Text Section */}
        <div className="py-20 px-6 sm:px-8 lg:px-16 max-w-[1400px] mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none"></div>
          <h1 className="font-graffiti text-6xl md:text-8xl text-brand-neon uppercase mb-6 transform -rotate-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Quality Flower.
          </h1>
          <h2 className="font-display text-2xl sm:text-4xl text-white uppercase font-black tracking-wider mb-6">Unfiltered Energy.</h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Strictly top-shelf. Confident and loud. The finest cannabis products for the culture. No compromises.
          </p>
        </div>

        {/* Feature Banner */}
        <div className="relative z-20 w-full bg-[#0a0a0a] border-y border-brand-neon/20 py-4 sm:py-8 overflow-hidden flex items-center justify-center">
          <div className="w-full flex flex-row items-start justify-between gap-1 px-1 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-1 md:flex-row md:text-left md:space-y-0 md:space-x-4 flex-1 group">
              <Leaf className="w-5 h-5 md:w-8 md:h-8 text-brand-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-[7px] sm:text-[9px] md:text-sm font-black uppercase tracking-wider text-white leading-tight mb-0.5">Top Tier</h4>
                <p className="text-[6px] sm:text-[8px] md:text-xs text-brand-neon/70 font-semibold leading-tight uppercase">Loud Pack Only</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-1 md:flex-row md:text-left md:space-y-0 md:space-x-4 flex-1 group">
              <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-brand-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-[7px] sm:text-[9px] md:text-sm font-black uppercase tracking-wider text-white leading-tight mb-0.5">Verified</h4>
                <p className="text-[6px] sm:text-[8px] md:text-xs text-brand-neon/70 font-semibold leading-tight uppercase">Lab Tested</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-1 md:flex-row md:text-left md:space-y-0 md:space-x-4 flex-1 group">
              <Search className="w-5 h-5 md:w-8 md:h-8 text-brand-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-[7px] sm:text-[9px] md:text-sm font-black uppercase tracking-wider text-white leading-tight mb-0.5">Curated</h4>
                <p className="text-[6px] sm:text-[8px] md:text-xs text-brand-neon/70 font-semibold leading-tight uppercase">Hand Selected</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-1 md:flex-row md:text-left md:space-y-0 md:space-x-4 flex-1 group">
              <EyeOff className="w-5 h-5 md:w-8 md:h-8 text-brand-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-[7px] sm:text-[9px] md:text-sm font-black uppercase tracking-wider text-white leading-tight mb-0.5">Discreet</h4>
                <p className="text-[6px] sm:text-[8px] md:text-xs text-brand-neon/70 font-semibold leading-tight uppercase">Move in Silence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Categories */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-24 mt-16">
        <h2 className="font-display text-4xl md:text-5xl font-black uppercase mb-10 text-white">
          The <span className="text-brand-neon">Stash</span>
        </h2>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => containerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 text-white hover:text-brand-neon hidden md:block"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => containerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 text-white hover:text-brand-neon hidden md:block"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div ref={containerRef} className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            
            {/* Flower */}
            <div 
              onClick={() => navigateToCategory('Flower')}
              className="group relative h-56 min-w-[300px] md:min-w-[400px] bg-[#0a0a0a] border-2 border-zinc-900 overflow-hidden flex items-center justify-between p-6 hover:border-brand-neon transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-[0.6] group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1780462617404-06145732-ab37-48fc-bda1-c2230e022234.jpeg")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
              <div className="relative z-10 max-w-[60%]">
                <Leaf className="w-6 h-6 text-brand-neon mb-3" />
                <h3 className="font-display text-2xl font-black uppercase mb-1 text-white">Flower</h3>
                <p className="text-xs text-zinc-400 font-medium mb-6 h-8 uppercase tracking-widest">Premium Buds</p>
                <button className="text-[11px] font-black uppercase tracking-widest text-brand-neon flex items-center transition-transform group-hover:translate-x-2">
                  Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Edibles */}
            <div 
              onClick={() => navigateToCategory('Edibles')}
              className="group relative h-56 min-w-[300px] md:min-w-[400px] bg-[#0a0a0a] border-2 border-zinc-900 overflow-hidden flex items-center justify-between p-6 hover:border-brand-neon transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-[0.6] group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1780463238453-739fe6bd-a92d-44c2-a3b5-3945cad28bfc.jpg")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
              <div className="relative z-10 max-w-[60%]">
                <Leaf className="w-6 h-6 text-brand-neon mb-3" />
                <h3 className="font-display text-2xl font-black uppercase mb-1 text-white">Edibles</h3>
                <p className="text-xs text-zinc-400 font-medium mb-6 h-8 uppercase tracking-widest">Elevated Taste</p>
                <button className="text-[11px] font-black uppercase tracking-widest text-brand-neon flex items-center transition-transform group-hover:translate-x-2">
                  Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Pre-Rolls */}
            <div 
              onClick={() => navigateToCategory('Pre-Rolls')}
              className="group relative h-56 min-w-[300px] md:min-w-[400px] bg-[#0a0a0a] border-2 border-zinc-900 overflow-hidden flex items-center justify-between p-6 hover:border-brand-neon transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-[0.6] group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1780465538854-ee3e4f95-7d5b-4dd0-944a-7da8a668eb84.jpeg")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
              <div className="relative z-10 max-w-[60%]">
                <Leaf className="w-6 h-6 text-brand-neon mb-3" />
                <h3 className="font-display text-2xl font-black uppercase mb-1 text-white">Pre-Rolls</h3>
                <p className="text-xs text-zinc-400 font-medium mb-6 h-8 uppercase tracking-widest">Always Fire</p>
                <button className="text-[11px] font-black uppercase tracking-widest text-brand-neon flex items-center transition-transform group-hover:translate-x-2">
                  Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            
            {/* Vapes */}
            <div 
              onClick={() => navigateToCategory('Vapes')}
              className="group relative h-56 min-w-[300px] md:min-w-[400px] bg-[#0a0a0a] border-2 border-zinc-900 overflow-hidden flex items-center justify-between p-6 hover:border-brand-neon transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-[0.6] group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1780467817475-207af7eb-8f58-44c4-ba98-c77fe9887682.jpeg")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
              <div className="relative z-10 max-w-[60%]">
                <h3 className="font-display text-2xl font-black uppercase mb-1 text-white">Vapes</h3>
                <p className="text-xs text-zinc-400 font-medium mb-4 uppercase tracking-widest">High Tech Hits.</p>
                <button className="text-[11px] font-black uppercase tracking-widest text-brand-neon flex items-center transition-transform group-hover:translate-x-2">
                  Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mt-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white tracking-widest">
            Heavy <span className="text-brand-neon">Hitters</span>
          </h2>
          <button 
            onClick={navigateToMenu}
            className="text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-brand-neon flex items-center transition-colors"
          >
            View Full Menu <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Product 1 */}
          <ProductCard 
            mediaSrc="https://www.image2url.com/r2/default/videos/1780471728002-da90e8a4-ceff-4b9b-b64c-573a647d7182.mp4"
            mediaType="video"
            type="Indica"
            title="Moonsticks"
            description="Calming // Relaxing"
            thc="28%"
            price="R80 / 3.5G"
            overlayClass="via-[#0a0a0a]/20"
            onClick={() => navigateToProduct(PRODUCTS[0])}
            onAddCart={(e) => addToCart(PRODUCTS[0], e)}
          />

          {/* Product 2 */}
          <ProductCard 
            mediaSrc="https://www.image2url.com/r2/default/videos/1780473672210-a9021a6e-f7bd-4bac-9bd9-cb366c04955b.mp4"
            mediaType="video"
            type="Hybrid"
            title="El Chapo"
            description="Euphoric // Happy"
            thc="26%"
            price="R250 / 3.5G"
            overlayClass="via-[#0a0a0a]/20"
            onClick={() => navigateToProduct(PRODUCTS[1])}
            onAddCart={(e) => addToCart(PRODUCTS[1], e)}
          />

          {/* Product 3 */}
          <ProductCard 
            mediaSrc="https://www.image2url.com/r2/default/videos/1780474048280-8d33049e-d66f-4fc1-98c2-3fd8e3949b19.mp4"
            mediaType="video"
            type="Sativa"
            title="Durban Poison"
            description="Energetic // Focused"
            thc="22%"
            price="R120 / 3.5G"
            overlayClass="via-[#0a0a0a]/20"
            onClick={() => navigateToProduct(PRODUCTS[2])}
            onAddCart={(e) => addToCart(PRODUCTS[2], e)}
          />

        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mt-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white tracking-widest">
            The <span className="text-brand-neon">Gallery</span>
          </h2>
        </div>
        <div className="w-full relative py-8">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="tranding-slider"
          >
            {[
              { type: 'video', url: "https://www.image2url.com/r2/default/videos/1780475114414-1c8532a1-8543-4d76-a0c6-1b5b472d7c29.mp4" },
              { type: 'image', url: "https://www.image2url.com/r2/default/images/1780477166936-f8a03f06-76a6-476d-85c4-fd645af52dff.jpeg" },
              { type: 'image', url: "https://www.image2url.com/r2/default/images/1780475621608-8537c3bc-c91e-435b-9f66-cc34dbc9b817.jpeg" },
              { type: 'video', url: "https://www.image2url.com/r2/default/videos/1780475987063-f9ef8832-9586-4945-a9c3-d90f75bd65c6.mp4" },
              { type: 'image', url: "https://www.image2url.com/r2/default/images/1780476392943-adaad543-7e55-4c20-846f-09d5eb1b3184.jpeg" },
              { type: 'image', url: "https://www.image2url.com/r2/default/images/1780476866268-fbfa834c-aa1d-4ea1-a206-71bdcceb3e6f.jpeg" }
            ].map((media, i) => (
              <SwiperSlide key={i} className="!w-[280px] md:!w-[400px] !h-[350px] md:!h-[500px]">
                <div className="w-full h-full bg-[#0a0a0a] border-2 border-zinc-900 overflow-hidden group hover:border-brand-neon transition-colors duration-300 relative rounded-2xl">
                  {media.type === 'video' ? (
                     <video src={media.url} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                     <div className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url("${media.url}")` }}></div>
                  )}
                </div>
              </SwiperSlide>
            ))}
            
            <div className="tranding-slider-control relative bottom-0 left-0 w-full mt-10 md:mt-20 h-10 flex justify-center items-center">
              <div className="swiper-pagination !static !w-auto !inline-flex gap-2"></div>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mt-20 mb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white tracking-widest">
            Community <span className="text-brand-neon">Reviews</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-[#0a0a0a] border-2 border-zinc-900 p-6 rounded-xl hover:border-brand-neon transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mr-4 text-white font-bold font-display uppercase border border-zinc-700">T</div>
              <div>
                <h4 className="text-white font-bold font-display uppercase tracking-wider">Tshepiso</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-neon fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full h-48 mb-4 rounded-lg border border-zinc-800"
            >
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780477516829-7a41ab19-f99c-418e-88c5-44acefbc36f8.jpg" },
                  { type: 'video', url: "https://www.image2url.com/r2/default/videos/1780508224131-5cdf16cc-5bae-4a35-a547-ac289b786ac5.mp4" }
                ]);
                setFullscreenInitialSlide(0);
              }}>
                <img src="https://www.image2url.com/r2/default/images/1780477516829-7a41ab19-f99c-418e-88c5-44acefbc36f8.jpg" alt="Nasty vapes" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780477516829-7a41ab19-f99c-418e-88c5-44acefbc36f8.jpg" },
                  { type: 'video', url: "https://www.image2url.com/r2/default/videos/1780508224131-5cdf16cc-5bae-4a35-a547-ac289b786ac5.mp4" }
                ]);
                setFullscreenInitialSlide(1);
              }}>
                <video src="https://www.image2url.com/r2/default/videos/1780508224131-5cdf16cc-5bae-4a35-a547-ac289b786ac5.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
              </SwiperSlide>
            </Swiper>
            <p className="text-zinc-400 text-sm leading-relaxed">
              "Best quality I've had in ages. The Nasty vapes are absolute fire, and the delivery was super quick. Definitely my new go-to!"
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-[#0a0a0a] border-2 border-zinc-900 p-6 rounded-xl hover:border-brand-neon transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mr-4 text-white font-bold font-display uppercase border border-zinc-700">T</div>
              <div>
                <h4 className="text-white font-bold font-display uppercase tracking-wider">Thabang</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-neon fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full h-48 mb-4 rounded-lg border border-zinc-800"
            >
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780506535859-48a9b209-ed2d-4231-b748-3a1b656bfd57.jpg" },
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780506672112-507501c7-0c5f-41f5-9fd7-186b1914ef1f.jpg" }
                ]);
                setFullscreenInitialSlide(0);
              }}>
                <img src="https://www.image2url.com/r2/default/images/1780506535859-48a9b209-ed2d-4231-b748-3a1b656bfd57.jpg" alt="Review photo 1" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780506535859-48a9b209-ed2d-4231-b748-3a1b656bfd57.jpg" },
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780506672112-507501c7-0c5f-41f5-9fd7-186b1914ef1f.jpg" }
                ]);
                setFullscreenInitialSlide(1);
              }}>
                <img src="https://www.image2url.com/r2/default/images/1780506672112-507501c7-0c5f-41f5-9fd7-186b1914ef1f.jpg" alt="Review photo 2" className="w-full h-full object-cover" />
              </SwiperSlide>
            </Swiper>
            <p className="text-zinc-400 text-sm leading-relaxed">
              "Incredible selection and top-tier customer service. El Chapo hits smooth and powerful. Highly recommend this spot to anyone."
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-[#0a0a0a] border-2 border-zinc-900 p-6 rounded-xl hover:border-brand-neon transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mr-4 text-white font-bold font-display uppercase border border-zinc-700">L</div>
              <div>
                <h4 className="text-white font-bold font-display uppercase tracking-wider">Lesego</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-neon fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <img 
              src="https://www.image2url.com/r2/default/images/1780503030089-dfd98e9f-4ec2-4d1c-98a4-f01ed3d32a8d.jpg" 
              alt="Review photo" 
              className="w-full h-48 object-cover rounded-lg mb-4 border border-zinc-800 cursor-pointer" 
              onClick={() => {
                setFullscreenImages([{ type: 'image', url: "https://www.image2url.com/r2/default/images/1780503030089-dfd98e9f-4ec2-4d1c-98a4-f01ed3d32a8d.jpg" }]);
                setFullscreenInitialSlide(0);
              }}
            />
            <p className="text-zinc-400 text-sm leading-relaxed">
              "The Gallery section convinced me, and the Durban Poison is phenomenal. Really appreciate the fast shipping and stealth packaging."
            </p>
          </div>

          {/* Review 4 */}
          <div className="bg-[#0a0a0a] border-2 border-zinc-900 p-6 rounded-xl hover:border-brand-neon transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mr-4 text-white font-bold font-display uppercase border border-zinc-700">K</div>
              <div>
                <h4 className="text-white font-bold font-display uppercase tracking-wider">Kabelo</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-neon fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full h-48 mb-4 rounded-lg border border-zinc-800"
            >
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780505574190-22abf524-c4d8-476a-b28c-8bf35c62cb83.jpg" },
                  { type: 'video', url: "https://www.image2url.com/r2/default/videos/1780505327151-882b690d-7172-4595-9142-34329312f856.mp4" }
                ]);
                setFullscreenInitialSlide(0);
              }}>
                <img src="https://www.image2url.com/r2/default/images/1780505574190-22abf524-c4d8-476a-b28c-8bf35c62cb83.jpg" alt="Review photo 1" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780505574190-22abf524-c4d8-476a-b28c-8bf35c62cb83.jpg" },
                  { type: 'video', url: "https://www.image2url.com/r2/default/videos/1780505327151-882b690d-7172-4595-9142-34329312f856.mp4" }
                ]);
                setFullscreenInitialSlide(1);
              }}>
                <video src="https://www.image2url.com/r2/default/videos/1780505327151-882b690d-7172-4595-9142-34329312f856.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
              </SwiperSlide>
            </Swiper>
            <p className="text-zinc-400 text-sm leading-relaxed">
              "Consistently dropping the hottest strains. Never been disappointed with a single order. Prices are very reasonable for the quality."
            </p>
          </div>

          {/* Review 5 */}
          <div className="bg-[#0a0a0a] border-2 border-zinc-900 p-6 rounded-xl hover:border-brand-neon transition-colors duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mr-4 text-white font-bold font-display uppercase border border-zinc-700">T</div>
              <div>
                <h4 className="text-white font-bold font-display uppercase tracking-wider">Thato</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-neon fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full h-48 mb-4 rounded-lg border border-zinc-800"
            >
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780505024973-6a13f7c9-f1e4-47a2-8464-df3bdc740f1d.jpg" },
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780506235670-b188d75c-504d-491a-b357-563a7b193229.jpg" }
                ]);
                setFullscreenInitialSlide(0);
              }}>
                <img src="https://www.image2url.com/r2/default/images/1780505024973-6a13f7c9-f1e4-47a2-8464-df3bdc740f1d.jpg" alt="Review photo 1" className="w-full h-full object-cover" />
              </SwiperSlide>
              <SwiperSlide className="cursor-pointer" onClick={() => {
                setFullscreenImages([
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780505024973-6a13f7c9-f1e4-47a2-8464-df3bdc740f1d.jpg" },
                  { type: 'image', url: "https://www.image2url.com/r2/default/images/1780506235670-b188d75c-504d-491a-b357-563a7b193229.jpg" }
                ]);
                setFullscreenInitialSlide(1);
              }}>
                <img src="https://www.image2url.com/r2/default/images/1780506235670-b188d75c-504d-491a-b357-563a7b193229.jpg" alt="Review photo 2" className="w-full h-full object-cover" />
              </SwiperSlide>
            </Swiper>
            <p className="text-zinc-400 text-sm leading-relaxed">
              "10/10 experience every time. The budtenders really know their stuff. If you're looking for premium flower, this is it."
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen Media Overlay */}
      {fullscreenImages && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 z-[60] text-white hover:text-brand-neon p-2 bg-black/50 rounded-full transition-colors"
            onClick={() => setFullscreenImages(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl h-full max-h-[85vh] relative flex items-center justify-center">
            {fullscreenImages.length > 1 ? (
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                initialSlide={fullscreenInitialSlide}
                modules={[Pagination]}
                className="w-full h-full"
              >
                {fullscreenImages.map((media, idx) => (
                  <SwiperSlide key={idx} className="flex items-center justify-center">
                    {media.type === 'image' ? (
                      <img src={media.url} alt={`Fullscreen ${idx + 1}`} className="max-w-full max-h-full object-contain mx-auto" />
                    ) : (
                      <video src={media.url} autoPlay loop muted playsInline controls className="max-w-full max-h-full object-contain mx-auto" />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
               <div className="flex items-center justify-center w-full h-full">
                  {fullscreenImages[0].type === 'image' ? (
                    <img src={fullscreenImages[0].url} alt="Fullscreen" className="max-w-full max-h-full object-contain mx-auto" />
                  ) : (
                    <video src={fullscreenImages[0].url} autoPlay loop muted playsInline controls className="max-w-full max-h-full object-contain mx-auto" />
                  )}
               </div>
            )}
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed bottom-6 right-6 z-[200] bg-brand-neon text-black px-6 py-3 rounded font-bold uppercase tracking-widest border border-green-400 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          Added to Cart!
        </div>
      )}
    </div>
  );
}
