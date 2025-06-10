import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "Balloon Hampers",
    description: "Custom balloon arrangements for all occasions",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749454732/WhatsApp_Image_2025-06-08_at_7.30.15_PM_1_reusgh.jpg",
  },
  {
    title: "Customized Photo Frames",
    description: "Personalized frames for your cherished memories",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749462782/1_zk3bpm.png",
  },
  {
    title: "Spotify Plaques",
    description: "Your favorite songs immortalized in elegant plaques",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749462786/2_zurhky.png",
  },
  {
    title: "Gift Hampers",
    description: "Thoughtfully curated gift collections",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749454732/WhatsApp_Image_2025-06-08_at_7.30.15_PM_em50pp.jpg",
  },
  {
    title: "Personalized Art",
    description: "Custom artwork tailored to your story",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451465/pexels-pixabay-264771_nt6txh.jpg",
  },
  {
    title: "Special Occasion Boxes",
    description: "Themed gift boxes for every celebration",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749454731/WhatsApp_Image_2025-06-08_at_7.30.17_PM_tgum5d.jpg",
  },
  {
    title: "Anniversary Gifts",
    description: "Celebrate love with our unique creations",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749454731/WhatsApp_Image_2025-06-08_at_7.30.17_PM_tgum5d.jpg",
  },
  {
    title: "Explore More",
    description: "Discover our full collection of gifts",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/all-categories",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatWeOffer() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#F2D0DD] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            variants={itemVariants}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Whether it's a birthday, anniversary, or just a way to say "you matter", we make handcrafted, customized gifts to suit every occasion.
          </motion.p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
            >
              {offer.link ? (
                <Link to={offer.link}>
                  <OfferCard offer={offer} index={index} />
                </Link>
              ) : (
                <OfferCard offer={offer} index={index} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OfferCard({ offer, index }) {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-72 lg:h-80 w-full"
      style={{
        backgroundImage: `url(${offer.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      transition={{ delay: index * 0.1 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <motion.div
          className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">{offer.title}</h3>
          <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
            {offer.description}
          </p>
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              offer.link 
                ? "bg-white text-pink-600 hover:bg-gray-100" 
                : "bg-pink-600 hover:bg-pink-700"
            } transition-colors duration-300 self-start`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {offer.link ? "View All" : "Explore"}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}