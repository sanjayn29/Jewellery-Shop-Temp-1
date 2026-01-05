import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedCollections() {
  const collections = [
    {
      title: 'Diamond Collection',
      description: 'Timeless brilliance',
      image: 'https://images.pexels.com/photos/1222540/pexels-photo-1222540.jpeg?auto=compress&cs=tinysrgb&w=800',
      pieces: '24 Pieces',
    },
    {
      title: 'Gold Elegance',
      description: 'Refined luxury',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      pieces: '18 Pieces',
    },
    {
      title: 'Gemstone Symphony',
      description: 'Colorful artistry',
      image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=800',
      pieces: '32 Pieces',
    },
  ];

  return (
    <section id="collections" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(217, 119, 6, 0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles className="w-5 h-5 text-amber-400 mr-3 animate-pulse-slow" />
            <span className="text-sm tracking-[0.3em] text-amber-400 uppercase font-light">
              Featured
            </span>
            <Sparkles className="w-5 h-5 text-amber-400 ml-3 animate-pulse-slow" />
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-amber-100 mb-6">
            COLLECTIONS
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-500 m-6"></div>

                <div className="absolute top-6 right-6 w-2 h-2 bg-amber-400 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 diamond-sparkle"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-amber-400 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 diamond-sparkle" style={{ animationDelay: '0.2s' }}></div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-xs tracking-[0.3em] text-amber-400 uppercase font-light mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {collection.pieces}
                  </span>
                  <h3 className="text-3xl font-light tracking-[0.15em] text-amber-100 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {collection.title}
                  </h3>
                  <p className="text-sm tracking-wider text-gray-300 font-light mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {collection.description}
                  </p>

                  <div className="flex items-center text-amber-400 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="mr-2">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-10 py-4 border border-amber-400/50 text-amber-100 font-light tracking-[0.2em] uppercase transition-all duration-500 hover:border-amber-400 hover:bg-amber-400/5">
            <span>View All Collections</span>
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
