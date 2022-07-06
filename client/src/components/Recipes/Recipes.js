import React from 'react';
import { useSelector } from 'react-redux';

import Recipe from './Recipe/Recipe';

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);

  console.log(recipes)

  // return (
  //   !recipes.length ? <CircularProgress /> : (
  //     <Grid>
  //       {recipes.map((recipe) => (
  //         <Grid>
  //           <Recipe recipe={recipe}/>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   )
  // )
  // need to add import for this stuff

  return (
    <>
      <h1>RECIPES</h1>
      <Recipe />
      <Recipe />
    </>
  )
}

export default Recipes;