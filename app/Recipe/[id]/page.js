'use client';
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("/Data/data.json");
        const data = await response.json();
        const foundRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(foundRecipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black bg-opacity-80 backdrop-blur text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-xl text-gray-300">{recipe.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            {recipe.image && (
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-screen  h-auto rounded-lg shadow-xl"
              />
            )}
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Difficulty</p>
                  <p className="font-medium">{recipe.difficulty}</p>
                </div>
                <div>
                  <p className="text-gray-400">Prep Time</p>
                  <p className="font-medium">{recipe.prepTime}</p>
                </div>
                <div>
                  <p className="text-gray-400">Cook Time</p>
                  <p className="font-medium">{recipe.cookTime}</p>
                </div>
                <div>
                  <p className="text-gray-400">Total Time</p>
                  <p className="font-medium">{recipe.totalTime}</p>
                </div>
                <div>
                  <p className="text-gray-400">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
                <div>
                  <p className="text-gray-400">Calories</p>
                  <p className="font-medium">{recipe.calories}</p>
                </div>
              </div>
            </div>

            {recipe.tags && recipe.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800/60 backdrop-blur-md text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-2"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-black rounded-full mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
