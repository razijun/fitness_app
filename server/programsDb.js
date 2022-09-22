import pkg from 'pg'
const {Client} =  pkg
import dotenv from 'dotenv'
import { client } from './initDb.js';

dotenv.config();

console.log(process.env.DATABASE_URL)

// const client = new Client({
//     connectionString:process.env.DATABASE_URL,
//     ssl:{rejectUnauthorized:false}
// })

export const getAllPrograms = async()=>{
    const text = `SELECT * FROM programs;`;
    const results = await client.query(text);
    return results.rows; 
  };
  
  export const getProgramByName = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM programs Where name = $1;`;
    const results = await client.query(text, [name] );
    return results.rows; 
  };
  
  export const addProgram = async(body)=>{
    const text = `INSERT INTO programs (name, description) VALUES ($1, $2) RETURNING *;`;
    console.log(text, [body.name, body.description]);
    const results = await client.query(text, [body.name, body.description]);
    return results.rows; 
  };
  
  export const removeProgram = async(body)=>{
    const text = `DELETE FROM programs WHERE (name) VALUES ($1) RETURNING *;`;
    console.log(text, [body.name]);
    const results = await client.query(text, [body.name]);
    return results.rows; 
  };

  export const addWorkoutToProgram = async(body)=>{
    const text = `INSERT INTO workoutToProgram (program_id, workout_id)
                  SELECT program_id FROM programs WHERE name VALUES ($1)
                  SELECT workout_id FROM workouts WHERE name VALUES ($2) RETURNING *;`;
    console.log(text, [body.program_id, body.workout_id]);
    const results = await client.query(text, [body.program_id, body.workout_id]);
    return results.rows; 
  };

  
  
