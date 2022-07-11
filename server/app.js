import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Importing routes
import mealDataRoutes from './routes/mealData.js'
import instructionDataRoutes from './routes/instructionData.js'
import usersRoutes from './routes/users.js'
import sessionsRoutes from './routes/sessions.js'

const app = express();

//Middleware

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/meals', mealDataRoutes)
app.use('/instructions', instructionDataRoutes)
app.use('/user', usersRoutes)
app.use('/sessions', sessionsRoutes)

const CONNECTION_URL = "mongodb+srv://BoB:BrainsOnBrioche@bobcluster.ntzdqlk.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);