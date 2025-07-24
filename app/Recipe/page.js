'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecipes, setShowRecipes] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setRecipes([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch("/Data/data.json");
        const data = await response.json();

        const filtered = data.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setRecipes(filtered);
      } catch (error) {
        console.error("Error loading data:", error);
        setRecipes([]);
      }
    };

    fetchData();
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

      <h1 style={{ fontSize: "10rem" }} className="absolute inset-0 flex items-center justify-center font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
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
            className="bg-transparent border-none outline-none text-white placeholder:text-gray-400"
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
        <div className="mt-40 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full max-w-7xl">
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/Recipe/${recipe.id}`} className="block">
              <div className="relative group overflow-hidden rounded-xl bg-black border border-white/10 shadow-xl hover:shadow-2xl transition duration-300 hover:scale-[1.03]">
                <div className="w-full h-56 bg-gray-800 flex items-center justify-center text-white text-center text-sm ">
                  {recipe.image ? (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover rounded-t-xl group-hover:brightness-75 transition"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-bold">{recipe.title}</h2>
                  <p className="text-sm text-gray-400">{recipe.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
