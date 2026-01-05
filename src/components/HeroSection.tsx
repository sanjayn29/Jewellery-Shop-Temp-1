import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-light tracking-[0.15em] text-amber-100 mb-6 animate-fade-in-up">
              ETERNAL
            </h1>
          </div>
          <div className="overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-6xl md:text-8xl font-light tracking-[0.15em] text-amber-100 mb-8 animate-fade-in-up">
              ELEGANCE
            </h2>
          </div>

          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}></div>

          <p
            className="text-lg md:text-xl text-gray-300 font-light tracking-[0.2em] mb-12 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Handcrafted masterpieces that transcend time. Each piece tells a story of exceptional artistry and timeless beauty.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <button className="group relative px-12 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-light tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:scale-105">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-px bg-white/50 animate-shimmer"></div>
              </div>
            </button>

            <button className="group relative px-12 py-4 border border-amber-400/50 text-amber-100 font-light tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-amber-400 hover:scale-105">
              <span className="relative z-10 group-hover:text-amber-400 transition-colors duration-500">
                Bespoke Service
              </span>
              <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/5 transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-amber-400/50" />
      </div>
    </section>
  );
}
