'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecipes, setShowRecipes] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
      })
      .catch(() => {
        setRecipes([]);
      });
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setShowRecipes(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/back.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
      </div>

      <h1 style={{ fontSize: "15rem" }} className="absolute inset-0 flex items-center justify-center font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
        Recipe
      </h1>

      <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${showRecipes ? 'z-20' : ''}`}>
        <div className="flex items-center gap-4 backdrop-blur rounded-xl px-6 py-3 border border-gray-100">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowRecipes(true);
            }}
            onFocus={() => setShowRecipes(true)}
            className="bg-transparent border-none outline-none text-white"
            placeholder="Search recipes..."
          />
          {searchQuery && (
            <button onClick={clearSearch} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
              Clear
            </button>
          )}
        </div>
      </div>

      {showRecipes && recipes.length > 0 && (
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {recipes.map((recipe) => {
            const prepTime = Math.round(recipe.strInstructions.length / 5) + " min";
            
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
              const ingredient = recipe[`strIngredient${i}`];
              const measure = recipe[`strMeasure${i}`];
              if (ingredient) {
                ingredients.push(`${measure} ${ingredient}`);
              }
            }

            return (
              <Link key={recipe.idMeal} href={`/recipes/${recipe.idMeal}`} className="block">
                <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-black shadow-lg transform transition duration-300 hover:scale-105">
                  <img 
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal} 
                    className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                    <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
                    <p className="text-sm mt-2 text-gray-300">{recipe.strCategory} • {recipe.strArea} Cuisine</p>
                    <p className="text-sm mt-1 text-gray-400">🕒 {prepTime}</p>
                    <p className="text-sm mt-3 text-gray-300">Ingredients:</p>
                    <ul className="text-xs mt-1">
                      {ingredients.map((item, index) => (
                        <li key={index} className="text-gray-400">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
