// lib/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWwwcJSqunDro4WICOomOOmLI-fmFJWTQ",
  authDomain: "capstone-8b302.firebaseapp.com",
  projectId: "capstone-8b302",
  storageBucket: "capstone-8b302.appspot.com",
  messagingSenderId: "389087137733",
  appId: "1:389087137733:web:ecacd16551b2f98d0a05ac"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
