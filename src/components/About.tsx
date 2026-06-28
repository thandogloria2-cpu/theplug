import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://www.image2url.com/r2/default/images/1779628000544-26b14a27-214c-4a00-b6fa-04fa57bf2615.png',
    'https://www.image2url.com/r2/default/images/1779627782716-56fb7e99-d0dd-4ea7-ba4c-887114f49368.png',
    'https://www.image2url.com/r2/default/images/1779629086963-e067e14c-5632-42e1-ac32-076f860a7e24.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 lg:gap-8 items-center lg:border lg:border-white/5 lg:p-8 lg:bg-brand-darker/70 lg:backdrop-blur-md">
          
          {/* Text Content */}
          <div className="border border-white/5 p-8 bg-brand-darker/70 backdrop-blur-md lg:border-none lg:p-0 lg:bg-transparent mb-8 lg:mb-0">
            <div className="max-w-md">
              <p className="text-brand-olive font-grotesk tracking-widest text-xs uppercase mb-4">About Our Space</p>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-tight mb-6">
                More than a shop.<br />It's a culture.
              </h2>
              <p className="text-zinc-400 font-sans leading-relaxed mb-8">
                Cuts & Plugs is where craftsmanship meets conscious choices. Whether you're here for a fresh cut, expert grooming, or premium cannabis products, our mission is simple, help you look good, feel good, and live well.
              </p>
              <button className="px-6 py-3 border border-brand-olive hover:bg-brand-olive/10 text-white text-xs font-medium uppercase tracking-widest transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Mobile Image Carousel */}
          <div className="lg:hidden relative h-64 sm:h-80 w-full overflow-hidden border border-white/5">
            <div 
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)`, width: '100%' }}
            >
              {images.map((src, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${src}")` }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-brand-olive' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Image Slider */}
          <div className="hidden lg:block h-96 w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              className="h-full w-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full w-full relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url("${src}")` }}
                    />
                    <div className="absolute inset-0 bg-black/40 transition-colors" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}
