'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const backgroundImages = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg'
]; 

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white px-6 py-16 flex items-center justify-center overflow-hidden">
      
      <Image
        src={backgroundImages[currentImage]}
        alt="About Background"
        fill
        className="object-cover z-0"
        style={{ filter: 'blur(8px)', opacity: 0.6 }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 max-w-5xl w-full space-y-12">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-white/80 text-lg">
            Welcome to <span className="text-red-500 font-semibold">Global Signature Dishes</span>, where we bring together culture, food, and stories from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-white/80">
              To celebrate cultural diversity through the art of cooking by sharing authentic recipes and stories behind the world’s most beloved dishes.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-white/80">
              To become a global community hub for food lovers, culture seekers, and culinary explorers.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">What We Offer</h2>
          <ul className="list-disc list-inside text-white/80 text-lg space-y-2 max-w-3xl mx-auto">
            <li>Authentic signature dishes from various countries</li>
            <li>Easy-to-follow recipes and cooking guides</li>
            <li>Food blogs and cultural stories</li>
            <li>Interactive cooking games for fun learning</li>
            <li>User-friendly dashboard for tracking favorites</li>
          </ul>
        </div>


        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold">Meet the Team</h2>
          <p className="text-white/70">
            We are a passionate group of foodies, developers, and designers working together to build a flavorful experience. (Team photos & bios coming soon!)
          </p>
        </div>


        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md text-center space-y-3">
          <h3 className="text-xl font-semibold">Join the Flavor Journey</h3>
          <p className="text-white/80">Explore. Cook. Connect. Be part of a world where culture meets cuisine.</p>
          <a href="/contact" className="inline-block mt-2 px-6 py-2 bg-red-500 rounded hover:bg-red-600 transition text-white font-medium">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
