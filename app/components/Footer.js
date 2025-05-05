import React from "react";
export default function Footer() {
    return (
      <footer className="w-full bg-black text-white py-6 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg font-semibold">Cook & Culture – Exploring Traditions Through Food</p>
          <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} Cook & Culture | All rights reserved</p>
        </div>
      </footer>
    );
  }
  