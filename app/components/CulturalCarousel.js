'use client'
import { useRef } from 'react';
import { motion } from 'framer-motion';

const stories = [
  { title: 'The Origins of Biryani', img: '/image9.jpg', text: 'Biryani traces its roots back to Persian influences in India, blending aromatic spices and flavors over centuries.' },
  { title: 'The Spice Trade & Indian Cuisine', img: '/image10.jpg', text: 'India’s rich spice heritage shaped its culinary identity through centuries of trade and cultural exchange.' },
  { title: 'The Legacy of Street Food', img: '/image11.jpg', text: 'From chaat to vada pav, India’s street food is a cultural phenomenon that reflects its diverse flavors and traditions.' },
  { title: 'The Art of Indian Sweets', img: '/image12.jpg', text: 'From rasgulla to jalebi, Indian sweets are deeply connected to celebrations and cultural rituals. Their preparation often holds generational wisdom, passed down through families.' },
];

export default function CulturalCarousel() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16  text-white text-center">
      <h2 className="text-5xl font-extrabold mb-12 tracking-wide">Cultural Stories Behind Food</h2>
      <div className="relative overflow-hidden px-10">
        <div className="flex space-x-8 overflow-x-scroll scrollbar-hide" ref={scrollRef}>
          {stories.map((story, index) => (
            <motion.div 
              key={index} 
              className="relative min-w-[350px] md:min-w-[450px]  rounded-lg shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img src={story.img} alt={story.title} className="w-full h-64 object-cover brightness-90 hover:brightness-100 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-semibold">{story.title}</h3>
                <p className="text-md text-gray-300 mt-3">{story.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
