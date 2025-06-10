import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import WhatWeOffer from './components/WhatWeOffer';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialSection from './components/Testimonial';
import ContactSection from './components/ContactSection';
import InstagramPreview from './components/InstagramPreview';
import About from './pages/About';
import Collection from './pages/Collection';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts />
              <WhatWeOffer />
              <InstagramPreview />
              <WhyChooseUs />
              <ContactSection />
            </>
          }
        />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />

        {/* Add more pages here */}
      </Routes>
    </div>
  );
}

export default App;
