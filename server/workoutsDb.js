// import pkg from 'pg'
// const {Client} =  pkg
import dotenv from 'dotenv'
import { client } from './initDb.js';

dotenv.config();

console.log(process.env.DATABASE_URL)

// const client = new Client({
//     connectionString:process.env.DATABASE_URL,
//     ssl:{rejectUnauthorized:false}
// })

export const getAllWorkouts = async()=>{
    const text = `SELECT * FROM workouts;`;
    const results = await client.query(text);
    return results.rows; 
  };
  
  export const getWorkoutByName = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM workouts Where name = $1;`;
    const results = await client.query(text, [name] );
    return results.rows; 
  };
  
  export const addWorkouts = async(body)=>{
    const text = `INSERT INTO ProgramToTrainee (name, description, exercise_id) VALUES ($1, $2, $3) RETURNING *;`;
    console.log(text, [body.name, body.description, body.exercise]);
    const results = await client.query(text, [body.name, body.description, body.exercise]);
    return results.rows; 
  };

  export const removeWorkout = async(body)=>{
    const text = `DELETE FROM workouts WHERE (name) VALUES ($1) RETURNING *;`;
    console.log(text, [body.name]);
    const results = await client.query(text, [body.name]);
    return results.rows; 
  };

  // Todo add exercises to workout by exerciseToWorkout
  export const addExerciseToWorkout = async(body)=>{
    const text = `INSERT INTO exerciseToWorkout (workout_id, exercise_id)
                  SELECT workout_id FROM programs WHERE name VALUES ($1)
                  SELECT exercise_id FROM workouts WHERE name VALUES ($2) RETURNING *;`;
    console.log(text, [body.program_id, body.workout_id]);
    const results = await client.query(text, [body.program_id, body.workout_id]);
    return results.rows; 
  };
  
