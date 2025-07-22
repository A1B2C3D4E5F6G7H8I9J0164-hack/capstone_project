'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg'];

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {

    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };
  const handleGoogleSignIn = () => {

    window.location.href = 'https://accounts.google.com/signup';
  };
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 via-yellow-200 to-pink-400">
      <Image src={images[currentImage]} alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-60" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

      <div className="relative bg-white/20 backdrop-blur-2xl p-10 rounded-2xl shadow-2xl w-full max-w-md z-20 text-white flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <Image src="data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23a)%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.27%2014.1a6.5%206.5%200%200%200%203.67-3.45q-1.24.21-2.7.34-.31%201.83-.97%203.1M8%2016A8%208%200%201%200%208%200a8%208%200%200%200%200%2016m.48-1.52a7%207%200%200%201-.96%200H7.5a4%204%200%200%201-.84-1.32q-.38-.89-.63-2.08a40%2040%200%200%200%203.92%200q-.25%201.2-.63%202.08a4%204%200%200%201-.84%201.31zm2.94-4.76q1.66-.15%202.95-.43a7%207%200%200%200%200-2.58q-1.3-.27-2.95-.43a18%2018%200%200%201%200%203.44m-1.27-3.54a17%2017%200%200%201%200%203.64%2039%2039%200%200%201-4.3%200%2017%2017%200%200%201%200-3.64%2039%2039%200%200%201%204.3%200m1.1-1.17q1.45.13%202.69.34a6.5%206.5%200%200%200-3.67-3.44q.65%201.26.98%203.1M8.48%201.5l.01.02q.41.37.84%201.31.38.89.63%202.08a40%2040%200%200%200-3.92%200q.25-1.2.63-2.08a4%204%200%200%201%20.85-1.32%207%207%200%200%201%20.96%200m-2.75.4a6.5%206.5%200%200%200-3.67%203.44%2029%2029%200%200%201%202.7-.34q.31-1.83.97-3.1M4.58%206.28q-1.66.16-2.95.43a7%207%200%200%200%200%202.58q1.3.27%202.95.43a18%2018%200%200%201%200-3.44m.17%204.71q-1.45-.12-2.69-.34a6.5%206.5%200%200%200%203.67%203.44q-.65-1.27-.98-3.1%22%20fill%3D%22%23fff%22%3E%3C%2Fpath%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22a%22%3E%0A%20%20%20%20%20%20%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h16v16H0z%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="Logo" width={60} height={60} className="mb-2" />
          <h2 className="text-3xl font-extrabold mb-1 text-center drop-shadow-lg">
            {isRegistering ? 'Create an Account' : 'Login to Cook & Culture'}
          </h2>
          <p className="text-gray-200 text-sm text-center">
            {isRegistering ? 'Join our global food community!' : 'Welcome back, foodie!'}
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800/80 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-gray-900 transition shadow-sm border border-transparent hover:border-red-300"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800/80 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-gray-900 transition shadow-sm border border-transparent hover:border-red-300"
            required
          />
        </div>

  

        <div className="w-full flex flex-col gap-3 mt-6">
          {loggedIn ? (
            <>
              <Link href="/" className="w-full bg-green-500 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition block text-center shadow-md">
                Go to Home
              </Link>
              <button onClick={handleLogout} className="w-full bg-gray-500 py-3 rounded-lg text-xl font-semibold hover:bg-gray-700 transition mt-2 shadow-md">
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 py-3 rounded-lg text-xl font-bold hover:from-red-600 hover:to-yellow-500 transition shadow-lg mb-1"
              >
                {isRegistering ? 'Sign Up' : 'Login'}
              </button>
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-3 rounded-lg text-xl font-semibold hover:bg-gray-100 transition shadow-md border border-gray-200 mb-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.242 3.648-5.617 3.648-3.383 0-6.148-2.805-6.148-6.273s2.765-6.273 6.148-6.273c1.93 0 3.227.82 3.969 1.523l2.719-2.648c-1.711-1.57-3.93-2.523-6.688-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.773 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.602z" fill="#4285F4"></path>
                    <path d="M3.152 7.548l3.281 2.406c.891-1.781 2.422-2.93 4.242-2.93 1.18 0 2.031.477 2.5.875l3.047-2.969c-1.523-1.406-3.477-2.23-5.547-2.23-3.617 0-6.672 2.477-7.773 5.824z" fill="#34A853"></path>
                    <path d="M12 22c2.43 0 4.477-.805 5.969-2.188l-2.75-2.25c-.75.523-1.781.891-3.219.891-2.484 0-4.594-1.68-5.352-3.977l-3.242 2.5c1.523 3.18 4.797 5.024 8.594 5.024z" fill="#FBBC05"></path>
                    <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.242 3.648-5.617 3.648-3.383 0-6.148-2.805-6.148-6.273s2.765-6.273 6.148-6.273c1.93 0 3.227.82 3.969 1.523l2.719-2.648c-1.711-1.57-3.93-2.523-6.688-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.773 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.602z" fill="none"></path>
                  </g>
                </svg>
                Sign in with Google
              </button>
            </>
          )}
        </div>

        <p className="mt-8 text-gray-200 cursor-pointer hover:text-white text-center underline underline-offset-4" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Login' : 'New here? Sign up'}
        </p>
      </div>
    </section>
  );
}
