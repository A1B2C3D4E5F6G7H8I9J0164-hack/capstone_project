'use client'
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!id) return;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals ? data.meals[0] : null))
      .catch(() => setRecipe(null));
  }, [id]);

  if (!recipe) return <p className="text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-80 rounded-lg mt-4" />
      <p className="mt-2">{recipe.strCategory} • {recipe.strArea} Cuisine</p>

      <h2 className="mt-6 text-2xl font-bold">Ingredients</h2>
      <ul>
        {[...Array(20)].map((_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
        })}
      </ul>

      <h2 className="mt-6 text-2xl font-bold">Instructions</h2>
      <p className="max-w-3xl text-center">{recipe.strInstructions}</p>
    </div>
  );
}
