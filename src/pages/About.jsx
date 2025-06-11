import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";
// import aboutImg from "../assets/about.jpg"; // 🖼️ Replace with your image
// import thumbnailImg from "../assets/thumbnail.jpg"; // 🎞️ preview image
// import btsVideo from "../assets/bts.mp4"; // 🎬 local MP4 video or use YouTube link

export default function About() {
  const [playVideo, setPlayVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-[url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451441/pexels-vladvictoria-10361386_ghcgcd.jpg')] bg-cover bg-center bg-no-repeat h-96 md:h-[500px] flex items-center justify-center mb-12 px-6 py-10"
        style={{
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.3)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase mb-4">
            About Us
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Crafting meaningful gifts with passion and creativity
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center relative"
          >
            <div className="relative group">
              <img
                // src={aboutImg}
                alt="About Fashion Craze"
                className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-xl" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-medium">Our Team</p>
                <p className="text-sm">Passionate creators since 2015</p>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our <span className="text-pink-600">Story</span>
            </h3>
            <div className="space-y-6 text-justify">
              <p className="text-gray-700 leading-relaxed">
                Welcome to <span className="font-semibold text-pink-600">Fashion Craze</span> – 
                where every gift becomes a cherished memory. Founded in 2015, we've been 
                dedicated to transforming ordinary moments into extraordinary experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of artisans combines traditional craftsmanship with innovative 
                techniques to create personalized gifts that speak directly to the heart. 
                Each piece is thoughtfully designed to celebrate your unique relationships.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">100% Handcrafted with premium materials</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Eco-friendly and sustainable practices</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-5">
              {['facebook-f', 'instagram', 'pinterest-p'].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-pink-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fab fa-${icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
     

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}