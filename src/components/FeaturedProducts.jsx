import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Hapmers",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451466/pexels-leeloothefirst-6675837_ohcr0x.jpg",
    size: "md:row-span-2",
    category: "Necklaces"
  },
  {
    id: 2,
    title: "Birthday",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749449531/3_wdk9am.png",
    size: "md:col-span-2 md:row-span-2",
    category: "Earrings"
  },
  {
    id: 3,
    title: "Diamond",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451463/pexels-alleksana-6478824_wu9r5q.jpg",
    size: "",
    category: "Rings"
  },
  {
    id: 4,
    title: "Valentine",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451473/pexels-koolshooters-6087540_rerw6m.jpg",
    size: "md:row-span-2",
    category: "Bracelets"
  },
  {
    id: 5,
    title: "PhotoFrame",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451465/pexels-pixabay-264771_nt6txh.jpg",
    size: "",
    category: "Anklets"
  },
  {
    id: 6,
    title: "Hampers",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749449530/4_gqobpb.png",
    size: "md:col-span-2",
    category: "Accessories"
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedProducts() {


  const navigate = useNavigate();

const handleRedirect = () => {
  navigate("/collection");
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 100); // slight delay to ensure page transition
};
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our exquisite collection of handcrafted gifts.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px]">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className={`relative overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${product.size} group`}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            
            {/* Category Tag */}
            <div className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              {product.category}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full w-full flex flex-col justify-end p-3 sm:p-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">
                  {product.title}
                </h3>
                
                {/* <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-xs sm:text-sm bg-white text-gray-900 font-medium px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-gray-100 transition-all shadow-sm hover:shadow-md"
                >
                  View Details
                </motion.button> */}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
     <motion.div 
  className="text-center mt-10 md:mt-14"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  viewport={{ once: true }}
>
  <button
    onClick={handleRedirect}
    className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
  >
    View All Collections
  </button>
</motion.div>

    </section>
  );
}