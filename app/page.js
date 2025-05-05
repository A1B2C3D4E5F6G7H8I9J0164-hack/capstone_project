'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Footer from './components/Footer'
import FeaturedRecipes from './components/FeaturedRecipes';
import CulturalCarousel from './components/CulturalCarousel';
import Testimonials from './components/Testimonials'
import SocialFeed from './components/SocialFeed'
import Quiz from './components/Quiz'


const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg'];
const country = 'India';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, captionRef.current];
    elements.forEach((el, index) => {
      gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: (index + 1) * 0.3 });
    });
  }, []);

  return (
    <>
    <div className="relative w-full h-screen ">
      <Image
        src={images[currentImage]}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      <nav className="absolute top-0 left-0 w-full z-20 text-white px-10 py-6 flex justify-between items-center bg-black/30 backdrop-blur">
        <div className='text-2xl font-bold'>Cook & Culture</div>
        {[
          { name: 'Home', path: '/' },
          { name: `Cuisine & Tradition – ${country}`, path: '/cuisine' },
          { name: `Signature Dish – ${country}`, path: '/dish' },
          { name: `Gallery – ${country}`, path: '/gallery' },
          { name: `Reflections – ${country}`, path: '/reflections' }
        ].map(({ name, path }, i) => (
          <a key={i} href={path} className="text-lg hover:text-gray-300 transition">
            {name}
          </a>
        ))}
      </nav>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 text-white px-4">
        <h1 ref={titleRef} className="text-5xl font-extrabold mb-4">Cook & Culture</h1>
        <p ref={subtitleRef} className="text-2xl mb-2">A Culinary Journey Through Traditions</p>
        <p ref={captionRef} className="text-lg text-gray-300">Discover the story behind every bite</p>
      </div>
      
    </div>
    <FeaturedRecipes/>
    <CulturalCarousel />
    <Testimonials/>
    <SocialFeed/>
    <Quiz/>
    </>
  );
}
