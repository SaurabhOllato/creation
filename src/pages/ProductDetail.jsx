// ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

const token = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://api.airtable.com/v0/${baseId}/${tableName}/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const fields = res.data.fields || {};
        setProduct({
          id: res.data.id,
          name: fields?.Name || "Unnamed Product",
          category: fields?.Category || "Uncategorized",
          image: fields?.Image?.[0]?.url || "",
          images: fields?.Image?.map((img) => img.url) || [],
          price: fields?.Price || 0,
          description: fields?.Description || "",
        });
      } catch (err) {
        console.error("Error loading product", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="p-10 text-center">
        <LoadingScreen />
      </div>
    );
  if (!product)
    return <div className="p-10 text-center">Product not found</div>;

  return (
    <div className="min-h-screen w-full mx-auto  ">
      <div className="bg-[url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749711275/hero_xxg4hp.jpg')] bg-cover bg-center h-32 sm:h-72 md:h-96 lg:h-[5rem] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center z-10 px-4"
        ></motion.div>
      </div>
      <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br mt-30 from-gray-50 to-gray-100 rounded-xl shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-sm text-gray-600 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Collection
        </button>

        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Image Swiper Section */}
          <div className="w-full h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-lg">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {product.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full aspect-square overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${product.name} ${i}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Details Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
            <div className="border-b border-gray-100 pb-4">
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <div className="mt-6">
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 font-sans">
                  {product.description}
                </h3>
              </div>
              <p className="text-2xl font-bold text-green-600 mt-10">
                {product.price}
              </p>

              {product.specifications && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Specifications
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <li key={key} className="flex">
                          <span className="font-medium text-gray-800">
                            {key}:
                          </span>
                          <span className="ml-2">{value}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🛍️ How to Order
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>
                    Click the <strong>"Order via WhatsApp"</strong> button
                    below.
                  </li>
                  <li>
                    Send us the <strong>product name</strong> and any{" "}
                    <strong>customization details</strong>.
                  </li>
                  <li>
                    Mention your <strong>delivery address</strong>.
                  </li>
                  <li>
                    We’ll confirm your order and share payment and shipping
                    info.
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/918446055677?text=Hi%2C%20I%20am%20interested%20in%20this%20product%3A%20${encodeURIComponent(
                    product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.093 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Order via WhatsApp
                </a>

                <button
                  onClick={() => {
                    navigate("/collection");
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
