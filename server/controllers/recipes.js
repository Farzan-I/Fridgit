import Recipes from '../externalApi/recipes.js';

export const getRecipes = (req, res) => {
  res.send(Recipes);
}
