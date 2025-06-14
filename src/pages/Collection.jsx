// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ContactSection from "../components/ContactSection";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// // Dummy product data with more details
// const allProducts = [
//   {
//     id: 1,
//     name: "Custom Mug",
//     category: "Mugs",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749462782/1_zk3bpm.png",
//     price: 12.99,
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Photo Frame",
//     category: "Frames",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749454732/WhatsApp_Image_2025-06-08_at_7.30.15_PM_em50pp.jpg",
//     price: 19.99,
//     rating: 4.2,
//   },
//   {
//     id: 3,
//     name: "LED Name Board",
//     category: "LED Gifts",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749462782/1_zk3bpm.png",
//     price: 29.99,
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     name: "Gift Hamper",
//     category: "Hampers",
//     image: "https://via.placeholder.com/300x300",
//     price: 39.99,
//     rating: 4.7,
//   },
//   {
//     id: 5,
//     name: "Magic Cushion",
//     category: "Cushions",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749454732/WhatsApp_Image_2025-06-08_at_7.30.15_PM_em50pp.jpg",
//     price: 24.99,
//     rating: 4.3,
//   },
//   {
//     id: 6,
//     name: "Audio Message Frame",
//     category: "Audio Gifts",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451473/pexels-koolshooters-6087540_rerw6m.jpg",
//     price: 34.99,
//     rating: 4.9,
//   },
//   {
//     id: 7,
//     name: "Love Card",
//     category: "Cards",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451473/pexels-ozge-k-2150194444-31038771_natxdg.jpg",
//     price: 5.99,
//     rating: 4.0,
//   },
//   {
//     id: 8,
//     name: "Chocolate Box",
//     category: "Chocolates",
//     image: "https://via.placeholder.com/300x300",
//     price: 15.99,
//     rating: 4.6,
//   },
//   {
//     id: 9,
//     name: "Acrylic Keychain",
//     category: "Keychains",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451473/pexels-koolshooters-6087540_rerw6m.jpg",
//     price: 8.99,
//     rating: 4.1,
//   },
//   {
//     id: 10,
//     name: "Explosion Box",
//     category: "Explosion Boxes",
//     image: "https://via.placeholder.com/300x300",
//     price: 27.99,
//     rating: 4.7,
//   },
//   {
//     id: 11,
//     name: "Pop-up Scrapbook",
//     category: "Scrapbooks",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451473/pexels-ozge-k-2150194444-31038771_natxdg.jpg",
//     price: 32.99,
//     rating: 4.8,
//   },
//   {
//     id: 12,
//     name: "Resin Frame",
//     category: "Resin Art",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451473/pexels-koolshooters-6087540_rerw6m.jpg",
//     price: 45.99,
//     rating: 4.9,
//   },
//   {
//     id: 13,
//     name: "Nameplate",
//     category: "Home Decor",
//     image: "https://via.placeholder.com/300x300",
//     price: 22.99,
//     rating: 4.4,
//   },
//   {
//     id: 14,
//     name: "Birthday Set",
//     category: "Birthday Gifts",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451468/pexels-cottonbro-6181851_bhy47q.jpg",
//     price: 49.99,
//     rating: 4.8,
//   },
//   {
//     id: 15,
//     name: "Love Jar",
//     category: "Message Gifts",
//     image: "https://via.placeholder.com/300x300",
//     price: 14.99,
//     rating: 4.3,
//   },
//   {
//     id: 16,
//     name: "Wood Engraving",
//     category: "Wooden Gifts",
//     image:
//       "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451473/pexels-ozge-k-2150194444-31038771_natxdg.jpg",
//     price: 37.99,
//     rating: 4.7,
//   },
// ];

// // Extract unique categories
// const categories = [
//   "All",
//   ...Array.from(new Set(allProducts.map((item) => item.category))),
// ];

// export default function Collection() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("default");

//   const filteredProducts =
//     selectedCategory === "All"
//       ? allProducts
//       : allProducts.filter((item) => item.category === selectedCategory);

//   return (
//     <section className="relative">
//       {/* Hero Section with Background Image - Made more compact for mobile */}
//       <div className="bg-[url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749451441/pexels-vladvictoria-10361386_ghcgcd.jpg')] bg-cover bg-center bg-no-repeat h-48 sm:h-64 md:h-80 w-full flex items-center justify-center relative">
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center z-10"
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase mb-4">
//             Our Collection
//           </h2>
//           <p className="text-xl text-white max-w-2xl mx-auto">
//             {/* Crafting meaningful gifts with passion and creativity */}
//           </p>
//         </motion.div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
//         {/* Filter Controls - Stacked vertically on mobile */}
//         <div className="mb-8 sm:mb-10">
//           {/* Category filter - scroll only on mobile */}
//           <div className="relative">
//             {/* Mobile: Horizontal scroll */}
//             <div className="flex space-x-2 pb-2 overflow-x-auto scrollbar-hide sm:overflow-x-visible sm:flex-wrap sm:gap-2">
//               {categories.map((category) => (
//                 <motion.button
//                   key={category}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-200 text-xs sm:text-sm font-medium ${
//                     selectedCategory === category
//                       ? "bg-black text-white border-black"
//                       : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Product Grid - Responsive columns */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
//         >
//           {filteredProducts.map((product) => (
//             <motion.div
//               key={product.id}
//               whileHover={{ y: -3 }}
//               className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
//             >
//               <div className="relative overflow-hidden aspect-square">
//                 <LazyLoadImage
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-3 sm:p-4">
//                 <h3 className="font-medium text-sm sm:text-base text-gray-800 line-clamp-1">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-500 text-xs sm:text-sm mt-1">
//                   {product.category}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Empty State */}
//         {filteredProducts.length === 0 && (
//           <div className="text-center py-12 sm:py-20">
//             <h3 className="text-lg sm:text-xl font-medium text-gray-700">
//               No products found
//             </h3>
//             <p className="text-gray-500 mt-2 text-sm sm:text-base">
//               Try selecting a different category
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaWhatsapp } from "react-icons/fa";
import { CubeTransparentIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

// Environment Variables
const token = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

// Optional: Skeleton placeholder component (should be implemented separately)
const ProductSkeleton = () => (
  <div className="bg-gray-100 animate-pulse rounded-lg h-60"></div>
);

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!token || !baseId || !tableName) {
          throw new Error("Missing Airtable config.");
        }

        const res = await axios.get(
          `https://api.airtable.com/v0/${baseId}/${tableName}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const records = res.data.records || [];

        const mapped = records.map((rec) => ({
          id: rec.id,
          name: rec.fields?.Name || "Unnamed Product",
          category: rec.fields?.Category || "Uncategorized",
          image:
            rec.fields?.Image?.[0]?.url || "https://via.placeholder.com/300",
            
          price: rec.fields?.Price || 0,
          rating: rec.fields?.Rating || 0,
        }));

        setProducts(mapped);
      } catch (err) {
        console.error("❌ Airtable Error:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    
    ...Array.from(new Set(products.map((p) => p.category))),
  ].filter(Boolean);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative">
  {/* Hero Banner - Improved with better contrast and responsive height */}
  <div className="bg-[url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749711275/hero_xxg4hp.jpg')] bg-cover bg-center h-56 sm:h-72 md:h-96 lg:h-[16rem] flex items-center justify-center relative">
    <div className="absolute inset-0 bg-black/40"></div>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center z-10 px-4"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
        Our Collection
      </h1>
      <p className="mt-3 text-white/90 max-w-md mx-auto text-sm md:text-base">
        Discover our premium selection of products
      </p>
    </motion.div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
    {/* Error State - More prominent and actionable */}
    {error && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-start"
      >
        <div className="flex-shrink-0">
          <ExclamationCircleIcon className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error loading products</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{error}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => window.location.reload()}
              className="text-sm font-medium text-red-700 hover:text-red-600"
            >
              Try again <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </motion.div>
    )}

    {/* Loading State - More realistic skeleton */}
    {loading && (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square bg-gray-200 animate-pulse"></div>
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Category Filters - Improved accessibility and sticky positioning */}
    {!loading && !error && (
      <div className="mb-10 sticky top-0 bg-white py-4 z-10">
        <h2 className="sr-only">Product categories</h2>
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:gap-2 sm:overflow-visible">
          {['All', ...categories].map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              // onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              onClick={() => setSelectedCategory(category)}

              className={`px-4 py-2 text-sm rounded-full border font-medium whitespace-nowrap transition-colors ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              aria-current={
                (category === 'All' && !selectedCategory) || selectedCategory === category 
                ? "true" : "false"
              }
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    )}

    {/* Product Grid - Better spacing and hover effects */}
    {!loading && !error && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group relative"
          >
            <div
              className="relative aspect-square overflow-hidden cursor-pointer"
              // onClick={() => setSelectedProduct(product)}
              onClick={() => navigate(`/product/${product.id}`)}
              aria-label={`View details for ${product.name}`}
            >
              <LazyLoadImage
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                effect="opacity"
                threshold={100}
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">
                {product.name}
              </h3>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs text-gray-500">{product.category}</span>
              <button
  onClick={() => navigate(`/product/${product.id}`)}
  className="text-xs font-medium text-gray-700 hover:text-black"
>
  View Product
</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )}

    {/* Product Modal - Enhanced with more details and better buttons */}
    {/* {selectedProduct && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        onClick={() => setSelectedProduct(null)}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 hover:bg-gray-100 transition"
            aria-label="Close product details"
          >
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>

          <div className="overflow-y-auto">
            <div className="relative h-64 sm:h-80 bg-gray-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6">
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  {selectedProduct.name}
                </h2>
                {selectedProduct.description && (
                  <p className="mt-3 text-gray-600 text-sm">
                    {selectedProduct.description}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/918446055677?text=Hi%2C%20I%20am%20interested%20in%20this%20product%3A%20${encodeURIComponent(
                    selectedProduct.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-3 rounded-lg transition"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Order on WhatsApp
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-3 rounded-lg transition"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )} */}

    {/* Empty State - More visually appealing */}
    {!loading && !error && filteredProducts.length === 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16 sm:py-24"
      >
        <div className="mx-auto h-24 w-24 text-gray-400">
          <CubeTransparentIcon className="w-full h-full" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          No products found
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          We couldn't find any products matching your selection.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none"
          >
            View all products
          </button>
        </div>
      </motion.div>
    )}
  </div>
</section>
  );
}
