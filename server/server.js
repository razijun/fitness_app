import  express  from "express";
import { initDB } from "./initDb.js";
import { getAllTrainees, getTraineesByName, addTrainee } from "./traineesDb.js";
import { addExercise, getAllExercises, getExercisesByName } from "./exercisesDb.js";
import { addProgram, getAllPrograms, getProgramByName } from "./programsDb.js";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();

initDB(); 

// app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//app.get is a root route get method that specifies what should happened
//when a browser gets in touch with the server:
app.get("/", (req,res)=>{
    res.send("hello")
});

// ################################
// get all trainees
app.get("/getAllTrainees", async (req,res)=>{
    const trainees = await getAllTrainees();
    res.send(trainees);
})

// getting trainee by name
app.get("/getTrainee/:name", async (req,res)=>{
    const {name} = req.params;
    const trainees = await getTraineesByName(name);
    res.send(trainees.rows);
})

// adding trainee
app.post('/addTrainee', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const trainees = await addTrainee(body);
    res.send(trainees);
})

// ##################################
// get all exercises
app.get("/getAllExercises", async (req,res)=>{
    const exercises = await getAllExercises();
    res.send(exercises);
})

// getting exercise by name
app.get("/getExercise/:name", async (req,res)=>{
    const {name} = req.params;
    const exercises = await getExercisesByName(name);
    res.send(exercises.rows);
})

// adding exercise
app.post('/addExercise', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const exercises = await addExercise(body);
    res.send(exercises);
})

// ########################################
// get all programs
app.get("/getAllPrograms", async (req,res)=>{
    const programs = await getAllPrograms();
    res.send(programs);
})

// getting program by name
app.get("/getProgram/:name", async (req,res)=>{
    const {name} = req.params;
    const programs = await getProgramByName(name);
    res.send(programs.rows);
})

// adding program
app.post('/addProgram', async (req,res) =>{
    const body = req.body;
    console.log(body);
    const programs = await addProgram(body);
    res.send(programs);
})



// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// app.post("/", (req,res)=>{
//     res.send("Thank you for clicking on me!")
// });

app.listen(3000,()=>{
    console.log("Server started on port 3000: http://localhost:3000/");
});