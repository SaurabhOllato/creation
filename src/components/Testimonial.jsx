import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
 

const testimonials = [
  {
    name: "Riya Mehta",
    comment:
      "Absolutely loved the personalized hamper! It was beautiful, thoughtful, and delivered on time. Highly recommend!",
    location: "Mumbai",
  },
  {
    name: "Aman Joshi",
    comment:
      "The Spotify plaque made my girlfriend so emotional. Thank you for helping me say what words couldn’t!",
    location: "Delhi",
  },
  {
    name: "Neha Verma",
    comment:
      "Beautifully packed, amazing quality, and such sweet communication. I’ll definitely order again.",
    location: "Pune",
  },
  {
    name: "Neha Verma",
    comment:
      "Beautifully packed, amazing quality, and such sweet communication. I’ll definitely order again.",
    location: "Pune",
  },
  {
    name: "Neha Verma",
    comment:
      "Beautifully packed, amazing quality, and such sweet communication. I’ll definitely order again.",
    location: "Pune",
  },
];

export default function TestimonialSection() {
 
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
         autoplay={{ 
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return `<span class="${className} bg-pink-500 opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
            }
          }}
          navigation={{
            nextEl: '.testimonial-swiper-button-next',
            prevEl: '.testimonial-swiper-button-prev',
          }}
           effect="fade"
          fadeEffect={{ crossFade: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-pink-50 rounded-xl p-6 shadow-md h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <FaQuoteLeft className="text-pink-500 text-2xl mb-4" />
                <p className="text-gray-700 mb-4">“{testimonial.comment}”</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

         <button className="testimonial-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors duration-300 hidden md:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="testimonial-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors duration-300 hidden md:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
    </section>
  );
}
