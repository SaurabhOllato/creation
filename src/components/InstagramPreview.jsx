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
              className="w-full h-[250px] sm:h-[600px] "
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
      {/* video section */}
      <div className="bg-gray-100 py-20 mt-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Behind The <span className="text-pink-600">Scenes</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Every gift tells a story, and here's a peek into how we craft
                yours with love and care. From handpicked materials to finishing
                touches, see what goes into every piece.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our studio is where magic happens - watch how we transform raw
                materials into personalized treasures that last a lifetime.
              </p>
              {/* <motion.button
                className="mt-4 px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPlayVideo(true)}
              >
                Watch Our Process
              </motion.button> */}
            </div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {playVideo ? (
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <video controls autoPlay className="w-full h-full object-cover">
                  <source
                    src="https://res.cloudinary.com/dxscy1ixg/video/upload/v1749636643/WhatsApp_Video_2025-06-11_at_12.27.28_PM_icufh7.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setPlayVideo(true)} // ✅ This line is critical
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <img
                  src="https://res.cloudinary.com/dxscy1ixg/image/upload/v1749625178/WhatsApp_Image_2025-06-09_at_8.26.54_PM_te1xo6.jpg"
                  alt="Watch our behind the scenes"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
