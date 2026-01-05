import { useState, useEffect } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCollections from './components/FeaturedCollections';
import ProductGallery from './components/ProductGallery';
import BespokeSection from './components/BespokeSection';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Lumière - Fine Jewellery & Luxury Craftsmanship';
  }, []);

  return (
    <>
      {loading && <LoadingAnimation onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen bg-black">
          <Navbar />
          <HeroSection />
          <FeaturedCollections />
          <ProductGallery />
          <BespokeSection />
          <CraftsmanshipSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
