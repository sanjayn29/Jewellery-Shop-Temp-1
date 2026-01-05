import { Diamond, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Collections: ['Fine Jewellery', 'Engagement Rings', 'Wedding Bands', 'Bespoke'],
    Services: ['Custom Design', 'Repairs', 'Appraisals', 'Consultations'],
    Company: ['Our Story', 'Craftsmanship', 'Sustainability', 'Careers'],
    Support: ['Contact Us', 'Shipping', 'Returns', 'FAQ'],
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-amber-900/20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(217, 119, 6, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Diamond className="w-8 h-8 text-amber-400" />
                <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-full"></div>
              </div>
              <span className="text-2xl font-light tracking-[0.2em] text-amber-100">LUMIÈRE</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6 max-w-sm">
              Crafting timeless elegance since 1975. Every piece tells a story of exceptional artistry and enduring beauty.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <button
                  key={index}
                  className="group w-10 h-10 bg-gray-900 border border-amber-900/30 hover:border-amber-400/50 flex items-center justify-center transition-all duration-300 hover:bg-amber-400/5"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-amber-100 tracking-[0.2em] uppercase text-sm font-light mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-amber-400 text-sm font-light transition-colors duration-300 inline-block hover:translate-x-1 transform"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mb-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rotate-45"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-amber-100 text-sm tracking-wider uppercase font-light mb-1">Visit Us</p>
              <p className="text-gray-400 text-sm font-light">123 Fifth Avenue, New York, NY 10001</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center">
              <Phone className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-amber-100 text-sm tracking-wider uppercase font-light mb-1">Call Us</p>
              <p className="text-gray-400 text-sm font-light">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center">
              <Mail className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-amber-100 text-sm tracking-wider uppercase font-light mb-1">Email Us</p>
              <p className="text-gray-400 text-sm font-light">info@lumiere.com</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 border border-amber-900/20 p-8">
          <div className="text-center mb-4">
            <p className="text-amber-100 tracking-[0.2em] uppercase text-sm font-light mb-2">
              Join Our Exclusive Circle
            </p>
            <p className="text-gray-400 text-sm font-light">
              Be the first to discover new collections and receive special offers
            </p>
          </div>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-black/50 border border-amber-900/30 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-400/50 transition-colors duration-300 font-light text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black tracking-widest uppercase text-sm font-light hover:brightness-110 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-16 pt-8 border-t border-amber-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-light">
              © 2024 Lumière. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm font-light transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm font-light transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm font-light transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
