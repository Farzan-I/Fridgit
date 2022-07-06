import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';

import Recipe from './Recipe/Recipe';

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  //state here refers to global redux state
  const testRecipes = ['test1', 'test2']
  //try mapping these

  console.log('recipes:', recipes)


  // return (
  //   !recipes.length ? <CircularProgress /> : (
  //     <Grid>
  //       {recipes.map((recipe) => (
  //         <Grid>
  //           <h1>hello</h1>
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
      {recipes.map((recipe) => (
        <Recipe recipe={recipe}/>
      ))}
    </>
  )
}

//grid can only be used inside the body of a function component
//look to work from lessons for these
//create a function component and append using ReactDOM.render
//or whatever it's called... 

export default Recipes;

//finish getting through tutorial to get above to work 
//so it prints recipes


//tutorial assumes that Grid, map etc will function. The 
//problem is that grid is apparently invalid for this kind of 
//function, and map may require grid to 