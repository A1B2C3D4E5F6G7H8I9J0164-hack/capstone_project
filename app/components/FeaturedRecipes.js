'use client'
import { useState } from 'react';

const recipes = [
  {
    name: 'Butter Chicken',
    img: '/image8.jpg',
    ingredients: 'Chicken, Butter, Tomato, Spices',
    time: '45 mins',
    makingDetails: 'Marinate chicken, cook in butter-tomato gravy, simmer until tender.',
    country: 'India',
    spiceLevel: 'Medium',
    funFact: 'Originally developed in Delhi in the 1950s at Moti Mahal.'
  },
  {
    name: 'Masala Dosa',
    img: '/image6.jpg',
    ingredients: 'Rice, Lentils, Potato, Spices',
    time: '30 mins',
    makingDetails: 'Ferment batter, prepare potato filling, cook dosa on hot tawa.',
    country: 'India (South)',
    spiceLevel: 'Mild',
    funFact: 'A staple breakfast from Karnataka, now loved globally.'
  },
  {
    name: 'Rogan Josh',
    img: '/image7.jpg',
    ingredients: 'Lamb, Yogurt, Kashmiri Spices',
    time: '1 hr',
    makingDetails: 'Slow-cook lamb in rich yogurt-based sauce with red chili and fennel.',
    country: 'Kashmir, India',
    spiceLevel: 'Hot',
    funFact: 'A Persian-influenced dish, now part of royal Kashmiri cuisine.'
  }
];

export default function FeaturedRecipes() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {recipes.map((recipe, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer overflow-hidden rounded-xl h-[450px] shadow-lg"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img 
              src={recipe.img} 
              alt={recipe.name} 
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all duration-500 ease-in-out" 
            />
            <div className="absolute inset-0 bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 flex items-center justify-center">
              <div className="text-center max-h-full overflow-y-auto space-y-2">
                <h3 className="text-2xl font-bold">{recipe.name}</h3>
                <p className="text-sm"><strong>Origin:</strong> {recipe.country}</p>
                <p className="text-sm"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p className="text-sm"><strong>Time:</strong> {recipe.time}</p>
                <p className="text-sm"><strong>Spice Level:</strong> {recipe.spiceLevel}</p>
                <p className="text-sm"><strong>Making:</strong> {recipe.makingDetails}</p>
                <p className="text-sm"><strong>Fun Fact:</strong> {recipe.funFact}</p>
                <a 
                  href='/Recipe' 
                  className="inline-block mt-2 px-4 py-2 bg-red-500 rounded hover:bg-red-700 transition text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
