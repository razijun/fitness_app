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


export const getAllTrainees = async()=>{
  const text = `SELECT * FROM trainees;`;
  const results = await client.query(text);
  return results.rows; 
};

export const getTraineesByName = async(name)=>{
  console.log(name);
  const text = `SELECT * FROM trainees Where name = $1;`;
  const results = await client.query(text, [name] );
  return results.rows; 
};

export const addTrainee = async(body)=>{
  const text = `INSERT INTO trainees (name, surname, phone, email, program_id) VALUES ($1, $2, $3, $4) RETURNING *;`;
  console.log(text, [body.name, body.surname, body.phone, body.email, body.program]);
  const results = await client.query(text, [body.name, body.surname, body.phone, body.email, body.program]);
  return results.rows; 
};

// client.query(`select * from exercises;`, (err,res)=>{
//         if(!err){
//             console.log(res.rows);
//         }else{
//             console.log(err.message);
//         }
//         client.end;
//     })

// }



