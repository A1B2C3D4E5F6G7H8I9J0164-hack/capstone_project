'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg'];

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

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

  const handleLogin = async () => {
    try {
      let userCredential;
      if (isRegistering) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          provider: 'email',
        });
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        provider: 'google',
      }, { merge: true });
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    router.push('/Login');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image src={images[currentImage]} alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"></div>

      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-2xl w-[400px] z-20 text-white">
        <h2 className="text-3xl font-bold mb-6">{isRegistering ? 'Create an Account' : 'Login to Cook & Culture'}</h2>

        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded-lg mb-4 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 rounded-lg mb-4 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition" required />

        {loggedIn ? (
          <>
            <Link href="/" className="w-full bg-green-500 py-3 rounded-lg text-xl hover:bg-green-700 transition block text-center">
              Go to Home
            </Link>
            <button onClick={handleLogout} className="w-full bg-gray-500 py-3 rounded-lg text-xl hover:bg-gray-700 transition mt-2">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={handleLogin} className="w-full bg-red-500 py-3 rounded-lg text-xl hover:bg-red-700 transition">
              {isRegistering ? 'Sign Up' : 'Login'}
            </button>
            <button onClick={handleGoogleSignIn} type="button" className="w-full bg-blue-500 py-3 rounded-lg text-xl hover:bg-blue-700 transition mb-2">
              Sign in with Google
            </button>
          </>
        )}

        <p className="mt-6 text-gray-300 cursor-pointer hover:text-gray-100" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Login' : 'New here? Sign up'}
        </p>
      </div>
    </section>
  );
}
