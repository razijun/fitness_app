import { client } from './initDb.js';


export const getAllSets = async()=>{
    const text = `SELECT * FROM sets;`;
    const results = await client.query(text);
    return results.rows; 
  };
  
  export const getSetsById = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM exercises Where set_id = $1;`;
    const results = await client.query(text, [id] );
    return results.rows; 
  };
  
  export const addSet = async(body)=>{
    const text = `INSERT INTO sets (weight, reps) VALUES ($1, $2) RETURNING *;`;
    console.log(text, [body.weight, body.reps]);
    const results = await client.query(text, [body.weight, body.reps]);
    return results.rows; 
  };

  export const removeSet = async(body)=>{
    const text = `DELETE FROM exercises WHERE (set_id) VALUES ($1) RETURNING *;`;
    console.log(text, [body.id]);
    const results = await client.query(text, [body.id]);
    return results.rows; 
  };

  export const updateSet = async(body)=>{
    const text = `UPDATE exercises SET (weight) VALUE ($1), (reps) VALUE ($2), WHERE (set_id) VALUE ($3), RETURNING *;`;
    console.log(text, [body.weight, body.reps]);
    const results = await client.query(text, [body.weight, body.reps]);
    return results.rows; 
  };