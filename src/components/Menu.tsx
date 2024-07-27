import React from "react"
import { recipes } from "../utils/recipes"

interface MenuProps {
	onRecipeSelect: (id: number) => void;
  }

const Menu: React.FC<MenuProps> = ({ onRecipeSelect }) => {

	const Menu = recipes.map((recipe) =>
	{
		return(
		<li className="max-w-40 min-w-40" key={recipe.id} onClick={() => onRecipeSelect(recipe.id)}>
			<h2 className="text-xl text-center mb-1 font-medium">{recipe.name}</h2>
			<img className="h-40 w-40 rounded-xl border border-indigo-200 shadow-md hover:shadow-2xl hover:shadow-indigo-500 transition-all " src={recipe.image}></img>

		</li>
		)
	})

	return(
		<React.Fragment>
			<ul className="flex gap-10 flex-wrap items-start justify-center">
				{Menu}
			</ul>
		</React.Fragment>
	)
}

export default Menu