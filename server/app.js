import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Importing routes
import recipesRoutes from './routes/recipes.js';
import mealDataRoutes from './routes/mealData.js'

const app = express();

//Middleware

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/recipes', recipesRoutes);
app.use('/meals', mealDataRoutes)

const CONNECTION_URL = "mongodb+srv://BoB:BrainsOnBrioche@bobcluster.ntzdqlk.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);