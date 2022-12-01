import pkg from 'pg'
const {Client} =  pkg
import dotenv from 'dotenv';
import { client } from './initDb.js';


dotenv.config();

console.log(process.env.DATABASE_URL)

// const client = new Client({
//     connectionString:process.env.DATABASE_URL,
//     ssl:{rejectUnauthorized:false}
// })

export const getAllExercises = async()=>{
    const text = `SELECT * FROM exercises;`;
    const results = await client.query(text);
    return results.rows; 
  };
  
  export const getExercisesByName = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM exercises Where name = $1;`;
    const results = await client.query(text, [name] );
    return results.rows; 
  };
  
  export const addExercise = async(body)=>{
    const text = `INSERT INTO exercises (name, muscle, description) VALUES ($1, $2, $3) RETURNING *;`;
    console.log(text, [body.name, body.muscle, body.description]);
    const results = await client.query(text, [body.name, body.muscle, body.description]);
    return results.rows; 
  };

  export const removeExercise = async(body)=>{
    const text = `DELETE FROM exercises WHERE (name) VALUES ($1) RETURNING *;`;
    console.log(text, [body.name]);
    const results = await client.query(text, [body.name]);
    return results.rows; 
  };

  export const updateExercise = async(body)=>{
    const text = `UPDATE exercises SET (name) VALUE ($1), (muscle) VALUE ($2), (description) VALUE ($3), WHERE (name) VALUE ($4), RETURNING *;`;
    console.log(text, [body.name, body.description]);
    const results = await client.query(text, [body.name, body.description]);
    return results.rows; 
  };