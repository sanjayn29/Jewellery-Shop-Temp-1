import { Pencil, Crown, Heart } from 'lucide-react';

export default function BespokeSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Share your vision with our design experts in a private consultation',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Witness your ideas transform into detailed sketches and 3D renderings',
    },
    {
      number: '03',
      title: 'Crafting',
      description: 'Master artisans bring your unique piece to life with precision',
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Receive your one-of-a-kind masterpiece in an exclusive presentation',
    },
  ];

  return (
    <section id="bespoke" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(217, 119, 6, 0.1) 49%, rgba(217, 119, 6, 0.1) 51%, transparent 52%)`,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-900/20 blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bespoke Design"
                className="relative z-10 w-full h-full object-cover"
              />

              <div className="absolute inset-0 border-2 border-amber-400/0 hover:border-amber-400/30 transition-all duration-700 m-8"></div>

              <div className="absolute -top-8 -left-8 w-32 h-32 border-l-2 border-t-2 border-amber-400/50"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r-2 border-b-2 border-amber-400/50"></div>

              <div className="absolute top-1/2 -right-12 bg-gradient-to-br from-black via-gray-900 to-black border border-amber-400/30 p-6 max-w-xs backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-3">
                  <Crown className="w-6 h-6 text-amber-400" />
                  <span className="text-xs tracking-[0.3em] text-amber-400 uppercase">Exclusive</span>
                </div>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Every bespoke piece is crafted exclusively for you, bearing our artisan's signature
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center mb-6">
              <Pencil className="w-5 h-5 text-amber-400 mr-3" />
              <span className="text-sm tracking-[0.3em] text-amber-400 uppercase font-light">
                Bespoke Service
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-amber-100 mb-6 leading-tight">
              CREATE YOUR
              <br />
              LEGACY
            </h2>

            <div className="h-px w-24 bg-gradient-to-r from-amber-400 to-transparent mb-8"></div>

            <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">
              Transform your most precious moments into wearable art. Our bespoke service allows you to collaborate with master craftsmen to design a piece that is uniquely yours.
            </p>

            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Whether reimagining an heirloom, commemorating a milestone, or creating something entirely new, we guide you through every step of the journey from concept to creation.
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-light text-amber-400 mb-1">500+</p>
                <p className="text-xs tracking-wider text-gray-400 uppercase">Bespoke Pieces</p>
              </div>
              <div className="h-12 w-px bg-amber-900/30"></div>
              <div className="text-center">
                <p className="text-4xl font-light text-amber-400 mb-1">100%</p>
                <p className="text-xs tracking-wider text-gray-400 uppercase">Satisfaction</p>
              </div>
              <div className="h-12 w-px bg-amber-900/30"></div>
              <div className="text-center">
                <p className="text-4xl font-light text-amber-400 mb-1">8-12</p>
                <p className="text-xs tracking-wider text-gray-400 uppercase">Weeks Timeline</p>
              </div>
            </div>

            <button className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-light tracking-[0.2em] uppercase transition-all duration-500 hover:brightness-110 hover:scale-105">
              <Heart className="mr-3 w-5 h-5" />
              <span>Begin Your Journey</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-amber-100 mb-4">
              THE BESPOKE PROCESS
            </h3>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative bg-gradient-to-b from-gray-900/50 to-black/50 border border-amber-900/20 p-8 h-full hover:border-amber-400/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="text-7xl font-light text-amber-400/20 mb-4 group-hover:text-amber-400/30 transition-colors duration-500">
                      {step.number}
                    </div>

                    <h4 className="text-xl font-light tracking-[0.15em] text-amber-100 mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {step.title}
                    </h4>

                    <div className="h-px w-12 bg-gradient-to-r from-amber-400/50 to-transparent mb-4"></div>

                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-400 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 diamond-sparkle"></div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-amber-900/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
