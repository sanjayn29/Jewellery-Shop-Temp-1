import { Heart } from 'lucide-react';

export default function ProductGallery() {
  const products = [
    {
      name: 'Eternity Diamond Ring',
      material: '18K White Gold',
      price: '$12,500',
      image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Solitaire Pendant',
      material: 'Platinum & Diamond',
      price: '$8,750',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Heritage Bracelet',
      material: '22K Yellow Gold',
      price: '$6,200',
      image: 'https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Sapphire Elegance',
      material: 'Platinum & Sapphire',
      price: '$15,400',
      image: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Rose Gold Earrings',
      material: '18K Rose Gold',
      price: '$4,850',
      image: 'https://images.pexels.com/photos/3661247/pexels-photo-3661247.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Emerald Fusion',
      material: 'Platinum & Emerald',
      price: '$18,900',
      image: 'https://images.pexels.com/photos/1721936/pexels-photo-1721936.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="jewellery" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.3em] text-amber-400 uppercase font-light mb-4 block">
            Fine Jewellery
          </span>
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-amber-100 mb-6">
            SIGNATURE PIECES
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6"></div>
          <p className="text-gray-400 font-light tracking-wider max-w-2xl mx-auto">
            Each creation is meticulously crafted by master artisans, combining centuries of expertise with contemporary design
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-900 to-black mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-transparent to-amber-600/0 group-hover:from-amber-400/10 group-hover:to-amber-600/5 transition-all duration-700"></div>

                <button className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-sm border border-amber-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-amber-400/10 hover:border-amber-400">
                  <Heart className="w-5 h-5 text-amber-100" />
                </button>

                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block px-3 py-1 bg-black/60 backdrop-blur-sm border border-amber-400/30 text-amber-400 text-xs tracking-widest uppercase">
                    New
                  </span>
                </div>

                <div className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/20 m-4 transition-all duration-500"></div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="w-full py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black text-sm tracking-widest uppercase font-light hover:brightness-110 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-light tracking-[0.15em] text-amber-100 mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400 font-light tracking-wider mb-3">
                  {product.material}
                </p>
                <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mb-3"></div>
                <p className="text-lg tracking-wider text-amber-400 font-light">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
