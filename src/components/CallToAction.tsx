import { MapPin } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Book Appointment Block */}
        <div id="book" className="border border-white/5 bg-brand-darker/70 backdrop-blur-md p-8 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity" style={{ backgroundImage: 'url("https://cdn.corenexis.com/f/Ie92rCD4QDF.png")' }}></div>
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl text-white uppercase mb-3">Book Your Appointment</h3>
              <p className="text-zinc-400 text-sm mb-8">Choose your service, pick your barber and book in seconds.</p>
            </div>
            <button className="px-6 py-2 bg-brand-olive hover:bg-brand-olive-dark text-white text-xs font-medium uppercase tracking-widest transition-colors w-fit">
              Book Now
            </button>
          </div>
        </div>

        {/* Community Block */}
        <div className="border border-white/5 bg-brand-darker/60 backdrop-blur-md p-8 flex flex-col justify-between group overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.89] transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1779690588167-7222bba6-b02f-4cc3-87fa-d686dfb4311d.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent" />
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl text-white uppercase mb-3">Join The Community</h3>
              <p className="text-zinc-300 text-sm mb-8 drop-shadow">Exclusive drops, events, discounts and more.</p>
            </div>
            <button className="px-6 py-2 border border-brand-olive hover:bg-brand-olive text-white text-xs font-medium uppercase tracking-widest transition-colors w-fit backdrop-blur-md">
              Join Now
            </button>
          </div>
        </div>

        {/* Social Vibes Block */}
        <div className="border border-white/5 bg-brand-darker/60 backdrop-blur-md p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="grid grid-cols-2 gap-1 absolute inset-0 opacity-[0.89] transition-opacity group-hover:opacity-100">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.corenexis.com/f/opEHEDjnZ1O.jpeg")' }} />
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.corenexis.com/f/mjLhjTEjUQn.jpeg")' }} />
          </div>
          <div className="absolute inset-0 bg-brand-darker/70 group-hover:bg-brand-darker/50 transition-colors" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl text-white uppercase mb-3">Follow Our Vibes</h3>
              <p className="text-zinc-300 text-sm mb-8">Stay updated on cuts, new products and events.</p>
            </div>
            <button className="px-6 py-2 border border-zinc-500 hover:border-brand-olive text-white text-xs font-medium uppercase tracking-widest transition-colors w-fit backdrop-blur-md">
              Follow Us
            </button>
          </div>
        </div>

        {/* Visit Us Block */}
        <div id="contact" className="border border-white/5 bg-brand-darker/70 backdrop-blur-md p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="pr-4 md:max-w-[70%] lg:max-w-[65%]">
              <h3 className="font-display text-xl text-white uppercase mb-4">Visit Us</h3>
              <div className="text-zinc-400 text-sm space-y-2 mb-6">
                <p>20511 Tugela Street</p>
                <p>Protea Glen Extension 20</p>
                <p>Soweto, Johannesburg</p>
              </div>
              <div className="text-zinc-400 text-sm space-y-1 mb-8">
                <p>Mon - Sat: 9am – 8pm</p>
                <p>Sun: 10am - 6pm</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=-26.278477,27.775396"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-brand-olive bg-brand-olive/5 hover:bg-brand-olive/20 text-white text-xs font-medium uppercase tracking-widest transition-colors w-fit block text-center"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
