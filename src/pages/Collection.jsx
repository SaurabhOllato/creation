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
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ].filter(Boolean);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="bg-[url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749711275/hero_xxg4hp.jpg')] bg-cover bg-center h-48 sm:h-64 md:h-80 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase">
            Our Collection
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Error */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Category Filters */}
        {!loading && !error && (
          <div className="mb-8">
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide sm:flex-wrap sm:gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full border font-medium ${
                    selectedCategory === category
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -3 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 group relative"
              >
                <div className="relative aspect-square overflow-hidden">
                  <LazyLoadImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    effect="blur"
                  />

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/918446055677?text=Hi%2C%20I%20am%20interested%20in%20this%20product%3A%20${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute hidden lg:flex inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <FaWhatsapp className="text-lg" />
                      Order on WhatsApp
                    </div>
                  </a>
                  
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-1">
                    {product.name}
                  </h3>
                  {/* <p className="text-xs text-gray-500 mt-1">{product.category}</p> */}
                  
                </div>
              </motion.div>
            ))}
            
          </motion.div>
        )}

        {/* No Products */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-12 sm:py-20">
            <h3 className="text-lg font-medium text-gray-700">
              No products found
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
