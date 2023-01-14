import  express  from "express";
import { initDB } from "./initDb.js";
import { getAllTrainees, getTraineesByName, addTrainee } from "./traineesDb.js";
import { addExercise, getAllExercises, getExercisesByName } from "./exercisesDb.js";
import { addWorkouts, getAllWorkouts, getWorkoutByName } from "./workoutsDb.js";
import { getAllTraineesData, getAllWorkoutsData, getTraineeDataByName, getWorkDataByName, insertExToWrk, insertSetToEx, insertWorkToTrainee } from "./joinReq.js";


const port = process.env.PORT || 3001;

// import bodyParser, { json } from "body-parser";


const app = express();

import cors from 'cors';
app.use(cors());


initDB(); 

// app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//app.get is a root route get method that specifies what should happened
//when a browser gets in touch with the server:
app.get("/", (req,res)=>{
    res.json("hello")
});

// ################################
// get all trainees
app.get("/getAllTrainees", async (req,res)=>{
    const trainees = await getAllTrainees();
    res.json(trainees);
})

// getting trainee by name
app.get("/getTrainee/:name", async (req,res)=>{
    const {name} = req.params;
    const trainees = await getTraineesByName(name);
    res.json(trainees);
})

// adding trainee
app.post('/addTrainee', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const trainees = await addTrainee(body);
    res.json(trainees);
})

// ##################################
// get all exercises
app.get("/getAllExercises", async (req,res)=>{
    const exercises = await getAllExercises();
    console.log(exercises);
    res.status(200).json(exercises);
})

// getting exercise by name
app.get("/getExercise/:name", async (req,res)=>{
    const {name} = req.params;
    const exercises = await getExercisesByName(name);
    res.json(exercises);
})

// adding exercise
app.post('/addExercise', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const exercises = await addExercise(body);
    res.json(exercises);
})

// ########################################
//get all workouts
app.get("/getAllWorkouts", async (req,res)=>{
    const workouts = await getAllWorkouts();
    res.json(workouts);
})

// getting workout by name
app.get("/getWorkouts/:name", async (req,res)=>{
    const {name} = req.params;
    const workout = await getWorkoutByName(name);
    res.json(workout);
})

// adding workout
app.post('/addWorkout', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const workout = await addWorkouts(body);
    res.json(workout);
})

// ##############################
// get all workouts with all the data
app.get("/getAllWorkoutsData", async (req,res)=>{
    const workout = await getAllWorkoutsData();
    res.json(workout);
})

// get workout with all the data by name
app.get("/getWorkDataByName/:name", async (req,res)=>{
    const {name} = req.params;
    const workout = await getWorkDataByName(name);
    res.json(workout);
})

// get all trainees with all the data
app.get("/getAllTraineesData", async (req,res)=>{
    const trainees = await getAllTraineesData();
    res.json(trainees);
})

// get trainee by name with all the data
app.get("/getTraineeDataByName/:name", async (req,res)=>{
    const {name} = req.params;
    const trainees = await getTraineeDataByName(name);
    res.json(trainees);
})

// insertExToWrk
app.post('/insertExToWrk', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const exToWork = await insertExToWrk(body);
    res.json(exToWork);
})

// insertSetToEx
app.post('/insertSetToEx', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const setToEx = await insertSetToEx(body);
    res.json(setToEx);
})

// insertWorkToTrainee
app.post('/insertWorkToTrainee', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const workToTrainee = await insertWorkToTrainee(body);
    res.json(workToTrainee);
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}: http://localhost:${port}/`);
});