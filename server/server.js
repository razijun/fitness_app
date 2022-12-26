import  express  from "express";
import { initDB } from "./initDb.js";
import { getAllTrainees, getTraineesByName, addTrainee } from "./traineesDb.js";
import { addExercise, getAllExercises, getExercisesByName } from "./exercisesDb.js";
import { addWorkouts, getAllWorkouts, getWorkoutByName } from "./workoutsDb.js";
import { getAllFullWorkouts, getWorkExByName } from "./joinReq.js";


const port = process.env.PORT || 3001;

import bodyParser from "body-parser";


const app = express();

import cors from 'cors';
app.use(cors());


initDB(); 

// app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.post("/post_name", async (req, res) => {
    let {name} = req.body
    console.log(name);
  });

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
    res.json(exercises);
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
// get all full workouts
app.get("/getAllFullWorkouts", async (req,res)=>{
    const workout = await getAllFullWorkouts();
    res.json(workout);
})

// get full workout by name
app.get("/getWorkExByName/:name", async (req,res)=>{
    const {name} = req.params;
    const workout = await getWorkExByName(name);
    res.json(workout);
})


app.listen(port,()=>{
    console.log(`Server started on port ${port}: http://localhost:${port}/`);
});