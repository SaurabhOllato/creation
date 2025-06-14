import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const products = [
  {
    id: "rect2rndJgFgVno6O",
    title: "Transparent Box Hamper",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749625192/WhatsApp_Image_2025-06-09_at_8.27.01_PM_otc1ri.jpg",
    size: "md:col-span-1 md:row-span-2",
    category: "Hamper Gifts",
    // price: "₹1,299"
  },
  {
    id: "recxIKAKZxJOOFYP8",
    title: "Birthday Special Hamper",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749624074/WhatsApp_Image_2025-06-10_at_8.24.41_PM_3_qxrznh.jpg",
    size: "md:col-span-2 md:row-span-2",
    category: "Birthday hampers",
    // price: "₹1,599"
  },
  {
    id: "rec3qoKLmV3DP7Phx",
    title: "Premium Photo Frame",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749625184/WhatsApp_Image_2025-06-09_at_8.26.57_PM_1_oc7d8e.jpg",
    size: "md:col-span-1 md:row-span-1",
    category: "Photo Frames",
    // price: "₹899"
  },
  {
    id: "rec6ptJWPPSWfRYCA",
    title: "Kids Gift Hamper",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749625171/WhatsApp_Image_2025-06-09_at_8.26.45_PM_ylgel9.jpg",
    size: "md:col-span-1 md:row-span-2",
    category: "Kids Gifts",
    // price: "₹1,199"
  },
  {
    id: "recQCKRJTS3igxs08",
    title: "Birthday Gift Box",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749625178/WhatsApp_Image_2025-06-09_at_8.26.53_PM_1_rpglgp.jpg",
    size: "md:col-span-1 md:row-span-1",
    category: "Birthday Gift Items",
    // price: "₹999"
  },
  {
    id: "recbRZ9Ru5PK3A3Kh",
    title: "Luxury Gift Hampers",
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749449530/4_gqobpb.png",
    size: "md:col-span-2 md:row-span-1",
    category: "Customized bouquet",
    // price: "₹1,899"
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProductCard = ({ product, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${product.size}`}
    >
      {/* Image */}
      <motion.div 
        className="absolute inset-0 bg-gray-100"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      {/* Content */}
      <motion.div 
        className="relative h-full flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="mb-2">
          <motion.span 
            className="inline-block bg-white/90 text-xs font-medium px-2 py-1 rounded-full"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {product.category}
          </motion.span>
        </div>
        <div>
          <motion.h3 
            className="text-white font-semibold text-sm sm:text-base line-clamp-2"
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            {product.title}
          </motion.h3>
        </div>
      </motion.div>
      
      {/* Link overlay */}
      <Link 
        to={`/product/${product.id}`} 
        className="absolute inset-0 z-10"
        aria-label={`View ${product.title}`}
      />
    </motion.div>
  );
};

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Featured Collections
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Handcrafted with love, perfect for every occasion
        </motion.p>
      </motion.div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => navigate('/collection')}
          className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Collections
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}