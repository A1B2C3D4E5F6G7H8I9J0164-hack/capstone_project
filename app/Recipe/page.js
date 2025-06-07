'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API Error`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data || !data.meals) {
          throw new Error("Invalid API response");
        }
        setRecipes(data.meals);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setRecipes([]); 
      });
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-black text-white px-6">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover opacity-60">
          <source src="/back.mp4" type="video/mp4" />
        </video>
      </div>

      <nav className=" top-0 left-0 w-full backdrop-blur shadow-lg py-4 px-6 flex justify-between items-center z-10">
        <div className="flex space-x-6 ">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/categories" className="hover:text-white transition">Categories</Link>
          <Link href="/favorites" className="hover:text-white transition">Favorites</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        <div className="flex items-center backdrop-blur rounded-xl px-4 py-2 border border-gray-100">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none  "
            placeholder="Search recipes..."
          />
        </div>
      </nav>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.idMeal} href={`/recipes/${recipe.idMeal}`}>
            <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-black shadow-lg transform transition duration-300 hover:scale-105">
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
                <p className="text-sm mt-2 text-gray-300">{recipe.strCategory}</p>
                <p className="text-sm mt-1 text-gray-400">{recipe.strArea} Cuisine</p>
                <a 
                  href={`/recipes/${recipe.idMeal}`} 
                  className="mt-4 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
