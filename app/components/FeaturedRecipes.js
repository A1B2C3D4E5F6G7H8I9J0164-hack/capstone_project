'use client'
import { useState } from 'react';

const recipes = [
  { name: 'Butter Chicken', img: '/image8.jpg', ingredients: 'Chicken, Butter, Tomato, Spices', time: '45 mins' },
  { name: 'Masala Dosa', img: '/image6.jpg', ingredients: 'Rice, Lentils, Potato, Spices', time: '30 mins' },
  { name: 'Rogan Josh', img: '/image7.jpg', ingredients: 'Lamb, Yogurt, Spices', time: '1 hr' }
];

export default function FeaturedRecipes() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {recipes.map((recipe, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer overflow-hidden rounded-lg h-[400px] flex flex-col items-center justify-center"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img src={recipe.img} alt={recipe.name} className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
              <h3 className="text-2xl font-bold">{recipe.name}</h3>
              <p className="text-sm">{recipe.ingredients}</p>
              <p className="text-sm">{recipe.time}</p>
              <a href={`/recipe/${recipe.name.toLowerCase().replace(/ /g, '-')}`} className="mt-3 px-4 py-2 bg-red-500 rounded hover:bg-red-700 transition">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
