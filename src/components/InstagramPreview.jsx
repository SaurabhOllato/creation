import React, { useState } from "react";
import { motion } from "framer-motion";

export default function InstagramPreview() {
  const [playVideo, setPlayVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative bg-gradient-to-br from-[#fef6f9] to-[#f7faff] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-pink-200 opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-200 opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            From Our Instagram
          </h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            A glimpse of the love, craft, and joy we create – straight from our
            Instagram!
          </motion.p>
        </motion.div>

        {/* Instagram Widget */}
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-white p-1 sm:p-2 mb-8 md:mb-12">
          <div className="aspect-w-3 aspect-h-2 w-full">
            {/* <iframe
              src="https://snapwidget.com/embed/1099101"
              className="snapwidget-widget w-full h-full"
              allowTransparency={true}
              frameBorder="0"
              scrolling="no"
              className="w-full h-[250px] sm:h-[750px] "
              title="Posts from Instagram"
            ></iframe> */}
            <iframe
              src="https://snapwidget.com/embed/1099267"
              class="snapwidget-widget"
              className="w-full h-[200px] sm:h-[600px] "
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
            
              title="Posts from Instagram"
            ></iframe>
          </div>
        </div>

        {/* Follow Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://instagram.com/Suhanis_creations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-medium rounded-full hover:from-pink-700 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Follow Us on Instagram</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
     
    </section>
  );
}
