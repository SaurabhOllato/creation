import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";
// import aboutImg from "../assets/about.jpg"; // 🖼️ Replace with your image
// import thumbnailImg from "../assets/thumbnail.jpg"; // 🎞️ preview image
// import btsVideo from "../assets/bts.mp4"; // 🎬 local MP4 video or use YouTube link
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function About() {
  const [playVideo, setPlayVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageStack = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const images = [
    "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749707398/IMG_6558_gxfhck.jpg",
    "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749707989/IMG_5611_ttcel4.jpg",
    "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749707990/IMG_0008_sglwhx.jpg",
    "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749707988/IMG_3493_yzycog.jpg",
  ];

  const icons = [
    // { component: <FaFacebookF />, link: "#" },
    { component: <FaInstagram />, link: "https://www.instagram.com/suhanis_creations?igsh=MThndmU3angzczFudg=="},
    { component: <FaYoutube />, link: "https://youtube.com/@suhaniscreations1989?si=qvaKToIZb_Q19Azb" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-[url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749625178/WhatsApp_Image_2025-06-09_at_8.26.54_PM_te1xo6.jpg')] bg-cover bg-center bg-no-repeat h-48 sm:h-64 md:h-[16rem] flex items-center justify-center mb-12 px-6 py-10"
        style={{
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center z-10"
        >
          <h2 className="text-2xl md:text-6xl font-extrabold text-white uppercase mb-4">
            About Me
          </h2>
          {/* <p className="text-xl text-white max-w-2xl mx-auto">
            Crafting meaningful gifts with passion and creativity
          </p> */}
        </motion.div>
      </section>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
         
          <motion.div
            className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageStack}
          >
            {images.slice(0, 4).map((img, index) => (
              <motion.div
                key={index}
                className={`
        absolute rounded-lg shadow-xl overflow-hidden border-2 border-white
        ${
          index === 0
            ? "w-3/5 left-0 top-0 z-40 md:w-2/5"
            : index === 1
            ? "w-3/5 right-0 top-20 z-30 md:w-2/5"
            : index === 2
            ? "w-3/5 left-0 top-44 z-20 md:w-2/5"
            : "w-3/5 right-0 top-64 z-10 md:w-2/5"
        }
        
        /* Responsive adjustments */
        sm:!w-1/2 
        ${
          index === 0
            ? "sm:left-4 sm:top-4"
            : index === 1
            ? "sm:right-4 sm:top-20"
            : index === 2
            ? "sm:left-4 sm:top-64"
            : "sm:right-4 sm:top-80"
        }
      `}
                variants={imageItem}
                whileHover={{ scale: 1.03, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={`Our work ${index + 1}`}
                  className="w-full h-44 lg:h-60  object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              My Creative <span className="text-pink-600">Journey</span>
            </h3>
            <div className="space-y-6 text-justify">
              <p className="text-gray-700 leading-relaxed">
                Welcome to{" "}
                <span className="font-semibold text-pink-600">
                  Suhani's Creations
                </span>{" "}
                – I began this journey back in 7th grade, at the age of 13. What
                started as a simple curiosity for crafting pop-up cards soon
                turned into something much bigger.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My classmates noticed my work and started asking me to create
                cards for their parents and friends. Their encouragement and
                admiration gave me confidence, and slowly, my small passion
                began to grow. Without a personal phone, I borrowed my dad’s —
                but only after he returned home from his shop at night. I’d
                prepare everything in advance — my materials, the setup, even
                the tripod — just so I could make the most of the 10 minutes (or
                sometimes even less) that I had. Despite the limitations, I made
                it work, recording videos and editing creatively with whatever
                resources were available. Eventually, I started a YouTube
                channel to share my creations with the world. That small spark
                of creativity, driven by passion and resourcefulness, has now
                evolved into something much greater. Today, everything has
                changed — I have grown, my skills have improved, and so has the
                love and support from those around me.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Exquisitely handmade with attention to every little detail
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Crafted with precision, care, and the finest quality
                    materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-5">
              {icons.map((icon, i) => (
                <motion.a
                  key={i}
                  href={icon.link}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-pink-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  {icon.component}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      {/* video section */}
      <div className="bg-gray-100 py-20 mt-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
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
                    src="https://res.cloudinary.com/dxscy1ixg/video/upload/v1749709416/IMG_9950_cxt3ht.mp4"
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

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
