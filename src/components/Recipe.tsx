// Recipe.tsx
import React from 'react';
import { recipes } from '../utils/recipes'; // Adjust the path as needed

interface RecipeProps {
  id: number | null;
}

const Recipe: React.FC<RecipeProps> = ({ id }) => {
	if (id === null) {
		return <div className="p-4 text-gray-600">Please select a recipe to view details.</div>;
	  }
  // Find the recipe by ID
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <div className="p-4 text-red-600">Recipe not found</div>;
  }

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <img src={recipe.image} alt={recipe.name} className="h-40 w-40 rounded-xl border border-indigo-200 shadow-md " />
      <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
      <span className="text-sm text-gray-600 mb-2">By {recipe.author}</span>
      <p className="mb-4">{recipe.description}</p>
      <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
