'use client'
import { useState } from 'react';

const testimonials = [
  { name: 'Aditi Sharma', review: 'Cook & Culture helped me discover new dishes and traditions. Love the interactive experience!', img: '/image16.jpg' },
  { name: 'Rajesh Patel', review: 'I never knew the story behind Biryani until now. Amazing platform for food lovers!', img: '/image13.jpg' },
  { name: 'Sanya Verma', review: 'The cultural storytelling is truly unique. Makes food feel more personal.', img: '/image14.jpg' },
  { name: 'Harsh Gupta', review: 'A fantastic way to explore Indian cuisine. The interactive map is a great touch!', img: '/image15.jpg' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16  text-white text-center">
      <h2 className="text-5xl font-bold mb-12 tracking-wide">What Food Lovers Say</h2>
      <div className="relative w-[450px] md:w-[600px] mx-auto  p-6 rounded-lg shadow-2xl hover:scale-105 transition-all">
        <img 
          src={testimonials[currentIndex].img} 
          alt={testimonials[currentIndex].name} 
          className="w-50 h-50 rounded-full mx-auto mb-4 border-4 border-red-500 shadow-lg" 
        />
        <h3 className="text-3xl font-semibold">{testimonials[currentIndex].name}</h3>
        <p className="text-lg text-gray-300 mt-3">{testimonials[currentIndex].review}</p>
      </div>
      <button 
        onClick={nextTestimonial} 
        className="mt-6 px-6 py-3 bg-red-500 rounded-lg text-xl hover:bg-red-700 transition"
      >
        Next Review
      </button>
    </section>
  );
}
