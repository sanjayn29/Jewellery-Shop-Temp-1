import { Award, Gem, Sparkles, Clock } from 'lucide-react';

export default function CraftsmanshipSection() {
  const features = [
    {
      icon: Award,
      title: 'Master Artisans',
      description: 'Crafted by award-winning jewellers with decades of expertise',
    },
    {
      icon: Gem,
      title: 'Ethically Sourced',
      description: 'Only the finest conflict-free diamonds and precious metals',
    },
    {
      icon: Sparkles,
      title: 'Certified Quality',
      description: 'Every piece certified and guaranteed for authenticity',
    },
    {
      icon: Clock,
      title: 'Lifetime Service',
      description: 'Complimentary maintenance and lifetime warranty included',
    },
  ];

  return (
    <section id="craftsmanship" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-sm tracking-[0.3em] text-amber-400 uppercase font-light mb-4 block">
              Excellence in Every Detail
            </span>
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-amber-100 mb-6">
              THE ART OF
              <br />
              PERFECTION
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-amber-400 to-transparent mb-8"></div>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">
              For over three generations, our atelier has been dedicated to creating extraordinary pieces that transcend time. Each jewel is born from a harmonious blend of traditional craftsmanship and innovative design.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              From the initial sketch to the final polish, every stage is executed with meticulous attention to detail. Our master craftsmen spend countless hours ensuring that each piece meets our exacting standards of beauty and quality.
            </p>
            <button className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-light tracking-[0.2em] uppercase transition-all duration-500 hover:brightness-110 hover:scale-105">
              <span>Discover Our Process</span>
              <div className="ml-3 w-6 h-6 border-2 border-black/30 rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1721943/pexels-photo-1721943.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-amber-400/30 m-6"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-400"></div>

              <div className="absolute top-6 right-6 w-3 h-3 bg-amber-400 rotate-45 diamond-sparkle"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-amber-400 rotate-45 diamond-sparkle" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-900/80 via-amber-800/60 to-black/90 backdrop-blur-sm border border-amber-400/30 p-8 max-w-xs">
              <p className="text-6xl font-light text-amber-400 mb-2">50+</p>
              <p className="text-sm tracking-widest text-gray-300 uppercase font-light">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative text-center p-8 bg-gradient-to-b from-gray-900/50 to-black/50 border border-amber-900/20 hover:border-amber-400/40 transition-all duration-500 hover:transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 relative">
                  <div className="absolute inset-0 bg-amber-400/20 blur-xl group-hover:bg-amber-400/40 transition-all duration-500"></div>
                  <feature.icon className="w-8 h-8 text-amber-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <h3 className="text-xl font-light tracking-[0.15em] text-amber-100 mb-3">
                  {feature.title}
                </h3>

                <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mb-4"></div>

                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-amber-400 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 diamond-sparkle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
