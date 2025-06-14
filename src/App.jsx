import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import WhatWeOffer from "./components/WhatWeOffer";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialSection from "./components/Testimonial";
import ContactSection from "./components/ContactSection";
import InstagramPreview from "./components/InstagramPreview";
import About from "./pages/About";
import Collection from "./pages/Collection";
import { useEffect, useState } from "react";
import LoadingScreen from "./pages/LoadingScreen";
import Whatsapp from "./pages/Whatsapp";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800); // wait a bit for smooth feel
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) return <LoadingScreen />;
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
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Add more pages here */}
      </Routes>
      <Whatsapp />
    </div>
  );
}

export default App;
