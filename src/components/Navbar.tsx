import { useState, useEffect } from 'react';
import { Diamond, Menu, X, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Fine Jewellery', href: '#jewellery' },
    { name: 'Bespoke', href: '#bespoke' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-amber-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <Diamond className="w-8 h-8 text-amber-400 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
              <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-full group-hover:bg-amber-400/40 transition-all duration-500"></div>
            </div>
            <span className="text-2xl font-light tracking-[0.2em] text-amber-100">LUMIÈRE</span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-5 py-2 text-sm tracking-wider text-gray-300 font-light uppercase group overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-amber-400">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 diamond-sparkle"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300 relative group">
              <User className="w-5 h-5" />
              <span className="absolute inset-0 bg-amber-400/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300 relative group">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute inset-0 bg-amber-400/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          <button
            className="lg:hidden text-gray-300 hover:text-amber-400 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-light tracking-[0.2em] text-gray-300 hover:text-amber-400 transition-colors duration-300 uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-8 pt-8 border-t border-amber-900/20">
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              <User className="w-6 h-6" />
            </button>
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
