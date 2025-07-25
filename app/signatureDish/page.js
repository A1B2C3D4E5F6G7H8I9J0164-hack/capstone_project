'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const dishes = [
  { id: 1, country: 'India', dish: 'Butter Chicken', image: '/image1.jpg' },
  { id: 2, country: 'Italy', dish: 'Margherita Pizza', image: '/image2.jpg' },
  { id: 3, country: 'Japan', dish: 'Sushi', image: '/image4.jpg' },
  { id: 4, country: 'Mexico', dish: 'Tacos Al Pastor', image: '/image3.jpg' },
  { id: 5, country: 'France', dish: 'Croissants', image: '/image5.jpg' },
  { id: 6, country: 'Thailand', dish: 'Pad Thai', image: '/image6.jpg' },
];

export default function SignatureDishes() {
  const [search, setSearch] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);

  const filteredDishes = dishes.filter((dish) =>
    dish.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className='flex justify-center items-center'> 
      <Image src="data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23a)%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.27%2014.1a6.5%206.5%200%200%200%203.67-3.45q-1.24.21-2.7.34-.31%201.83-.97%203.1M8%2016A8%208%200%201%200%208%200a8%208%200%200%200%200%2016m.48-1.52a7%207%200%200%201-.96%200H7.5a4%204%200%200%201-.84-1.32q-.38-.89-.63-2.08a40%2040%200%200%200%203.92%200q-.25%201.2-.63%202.08a4%204%200%200%201-.84%201.31zm2.94-4.76q1.66-.15%202.95-.43a7%207%200%200%200%200-2.58q-1.3-.27-2.95-.43a18%2018%200%200%201%200%203.44m-1.27-3.54a17%2017%200%200%201%200%203.64%2039%2039%200%200%201-4.3%200%2017%2017%200%200%201%200-3.64%2039%2039%200%200%201%204.3%200m1.1-1.17q1.45.13%202.69.34a6.5%206.5%200%200%200-3.67-3.44q.65%201.26.98%203.1M8.48%201.5l.01.02q.41.37.84%201.31.38.89.63%202.08a40%2040%200%200%200-3.92%200q.25-1.2.63-2.08a4%204%200%200%201%20.85-1.32%207%207%200%200%201%20.96%200m-2.75.4a6.5%206.5%200%200%200-3.67%203.44%2029%2029%200%200%201%202.7-.34q.31-1.83.97-3.1M4.58%206.28q-1.66.16-2.95.43a7%207%200%200%200%200%202.58q1.3.27%202.95.43a18%2018%200%200%201%200-3.44m.17%204.71q-1.45-.12-2.69-.34a6.5%206.5%200%200%200%203.67%203.44q-.65-1.27-.98-3.1%22%20fill%3D%22%23fff%22%3E%3C%2Fpath%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22a%22%3E%0A%20%20%20%20%20%20%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h16v16H0z%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="Logo" width={60} height={60} className="mb-2" />
      <h1 className="text-5xl font-bold text-center mb-10 drop-shadow bg-gradient-to-r from-black via-gray-300 to-white bg-clip-text text-transparent">
        🌍 World Signature Dishes
      </h1>
      </div>

      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Search by country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-full bg-zinc-900 text-white border border-zinc-700 shadow focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredDishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            <img src={dish.image} alt={dish.dish} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold bg-white bg-clip-text text-transparent">
                {dish.dish}
              </h2>
              <p className="text-sm text-gray-400 mb-3">Country: {dish.country}</p>
              <button
                onClick={() => setSelectedDish(dish)}
                className="bg-red-500 hover:bg-lime-600 text-black px-4 py-2 rounded-lg shadow"
              >
                Leave a Review
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-zinc-800 rounded-2xl p-8 max-w-sm w-full shadow-lg">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-black via-gray-300 to-white bg-clip-text text-transparent">
              Review: {selectedDish.dish}
            </h3>
            <textarea
              rows={4}
              className="w-full bg-zinc-900 text-white border border-zinc-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Write your review..."
            ></textarea>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setSelectedDish(null)}
                className="px-4 py-2 bg-zinc-600 hover:bg-zinc-500 text-white rounded-lg"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-lime-500 text-black hover:bg-lime-600 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
