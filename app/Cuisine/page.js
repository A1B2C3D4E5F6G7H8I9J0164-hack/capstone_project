'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const recipesData = [
  { id: 1, name: "Paneer Butter Masala", cuisine: "Indian", rating: 4.8, image: "/image1.jpg" },
  { id: 2, name: "Pasta Carbonara", cuisine: "Italian", rating: 4.7, image: "/pasta.jpg" },
];

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  useEffect(() => {
    setFilteredRecipes(
      recipesData.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

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
              <img src={recipe.image} alt={recipe.name} className="rounded-lg" />
              <h2 className="mt-2 text-xl font-semibold">{recipe.name}</h2>
              <p className="text-gray-400">{recipe.cuisine} | ⭐ {recipe.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
