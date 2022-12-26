import { client } from './initDb.js';


export const getAllExercises = async()=>{
    const text = `SELECT * FROM exercises;`;
    const results = await client.query(text);
    return results.rows; 
  };
  
  export const getExercisesByName = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM exercises Where ex_name = $1;`;
    const results = await client.query(text, [name] );
    return results.rows; 
  };
  
  export const addExercise = async(body)=>{
    const text = `INSERT INTO exercises (ex_name, muscle, ex_desc) VALUES ($1, $2, $3) RETURNING *;`;
    console.log(text, [body.name, body.muscle, body.description]);
    const results = await client.query(text, [body.name, body.muscle, body.description]);
    return results.rows; 
  };

  export const removeExercise = async(body)=>{
    const text = `DELETE FROM exercises WHERE (ex_name) VALUES ($1) RETURNING *;`;
    console.log(text, [body.name]);
    const results = await client.query(text, [body.name]);
    return results.rows; 
  };

  export const updateExercise = async(body)=>{
    const text = `UPDATE exercises SET (ex_name) VALUE ($1), (muscle) VALUE ($2), (ex_desc) VALUE ($3), WHERE (ex_name) VALUE ($4), RETURNING *;`;
    console.log(text, [body.name, body.description]);
    const results = await client.query(text, [body.name, body.description]);
    return results.rows; 
  };