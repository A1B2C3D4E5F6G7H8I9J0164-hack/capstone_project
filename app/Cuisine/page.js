'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API Error`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data || !data.recipes) {
          throw new Error("Invalid API response");
        }
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setRecipes([]); 
      });
  }, []);
  

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-6">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Find Your Perfect Recipe</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-4 w-full max-w-md px-4 py-2 rounded-xl bg-gray-800 text-gray-300 focus:outline-none"
          placeholder="Search recipes..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <div className="cursor-pointer bg-gray-800 p-4 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
              <img src={recipe.image} alt={recipe.title} className="rounded-lg" />
              <h2 className="mt-2 text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-400">⭐ {recipe.aggregateLikes || "No ratings yet"}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
