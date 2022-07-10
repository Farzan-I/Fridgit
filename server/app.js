import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//have tried using config files to stop mongoose from crashing app, so far no joy 
//this is what connectDB is for 
// import connectDB from '../config/db.js'

// Importing routes
import mealDataRoutes from './routes/mealData.js'
import instructionDataRoutes from './routes/instructionData.js'
// import usersRoutes from './routes/users.js'

const app = express();

//Middleware

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/meals', mealDataRoutes)
app.use('/instructions', instructionDataRoutes)
// app.use('/users', usersRoutes)

// Connect Database
// connectDB();

// this is connection is failing. to be investigated
const CONNECTION_URL = "mongodb+srv://BrainsOnBrioche:spinnerdolphin@cluster0.ohaz6.mongodb.net/?retryWrites=true&w=majority";
//have got it down to a port-in-use error... but port isn't in use. It throws that error for every attempted connection
//every time I kill the port, if I then run npm start for the client, it puts that port back into use with a new PID... 
//so it just becomes an endless cycle
//changed it to allow access from any ip address... seemed to maybe change things a little, not sure
const PORT = process.env.PORT || 4000;

//can also comment out the line below and then connect to mongoose at the bottom... but does this prevent the apis from working?

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

// this is connection is failing. to be investigated
//I don't think this is about the IP address... SHS
//is it worth jumping back to an earlier commit when it was working? I feel like this broke around the same time we started having
//to add .js to everything/introduce babel etc... 
//changed all the 4000s to 8082s... still didn't work. Whether the port is in use or not doesn't seem to matter when the below
//is uncommented...

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);