import React, { useEffect } from "react"; 
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Recipes from './components/Recipes/Recipes';
import { useDispatch } from "react-redux";

import { getRecipes } from './actions/recipes'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (

    <div>
      <h1>App</h1>
      <Recipes />
    </div>
  
    // <Container maxWidth="lg">
    //   <AppBar position="static" color="inherit">
    //     <Typography variant="h2" align="center">BrainsOnBrioche</Typography>
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid container justify="space-between" alignItems="stretch" spacing={3}>
    //         <Grid item xs={12} sm={7}>
    //           <Recipes />
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  );


  // return (
  //   <div>
  //     <h1>App</h1>
  //   </div>
  // );
}

export default App;