import fetchRecipes from '../externalApi/recipes.js';

export const getRecipes = (req, res) => {
    fetchRecipes()
      .then(response => res.send(response))
}

