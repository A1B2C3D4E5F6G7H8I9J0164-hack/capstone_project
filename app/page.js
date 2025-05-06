'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import Footer from './components/Footer';
import FeaturedRecipes from './components/FeaturedRecipes';
import CulturalCarousel from './components/CulturalCarousel';
import Testimonials from './components/Testimonials';
import SocialFeed from './components/SocialFeed';
import Quiz from './components/Quiz';

const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg'];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, captionRef.current];
    elements.forEach((el, index) => {
      gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: (index + 1) * 0.3 });
    });
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src={images[currentImage]}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <nav className="absolute top-0 left-0 w-full z-100 text-white px-5 py-4  flex justify-between items-center bg-black/30 backdrop-blur rounded-full fixed">
          <div className="text-2xl font-bold">Cook & Culture</div>
          <div className="flex space-x-15">
            <Link href="/Cuisine" className="text-lg hover:text-red-500 transition cursor-pointer">{`Recipe`}</Link>
            <Link href="/Dish" className="text-lg hover:text-red-500 transition cursor-pointer">{`Signature Dish`}</Link>
            <Link href="/Blog" className="text-lg hover:text-red-500 transition cursor-pointer">{`Blog `}</Link>
            <Link href="/Games" className="text-lg hover:text-red-500 transition cursor-pointer">{`Games`}</Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-lg  transition cursor-pointer">
                Logout
              </button>
            ) : (
              <Link href="/Login" className="text-lg hover:text-gray-300 transition cursor-pointer">Login</Link>
            )}
          </div>
        </nav>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 text-white px-4">
            <div className='backdrop-blur rounded-xl p-5'>
          <h1 ref={titleRef} className="text-5xl font-extrabold mb-4">Cook & Culture</h1>
          <p ref={subtitleRef} className="text-2xl mb-2">A Culinary Journey Through Traditions</p>
          <p ref={captionRef} className="text-lg text-gray-300">Discover the story behind every bite</p>
          </div>
        </div>
      </div>
       
      <FeaturedRecipes />
      <CulturalCarousel />
      <Testimonials />
      <SocialFeed />
      <Quiz />

      <Footer />
    </>
  );
}
