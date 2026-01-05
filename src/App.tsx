import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Lumière - Fine Jewellery & Luxury Craftsmanship';
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
