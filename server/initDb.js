import pkg from 'pg'
const {Client} =  pkg
import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.DATABASE_URL)

const client = new Client({
    connectionString:process.env.DATABASE_URL,
    ssl:{rejectUnauthorized:false}
})

export const initDB= async()=>{
client.connect();

// exercises table
await client.query(`DROP TABLE IF EXISTS exercises;`)

await client.query(`CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);`)


await client.query(`INSERT INTO 
exercises (name, area, description)
VALUES
('Squat', 'Legs', 'explanation about the exercise'), 
('Bench', 'Chest', 'explanation about the exercise')
;`)



// programs table
await client.query(`DROP TABLE IF EXISTS programs;`)

await client.query(`CREATE TABLE programs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);`)


await client.query(`INSERT INTO 
programs (name, description)
VALUES
('Strength Program', 'explanation about the program'), 
('Muscle Building Program', 'explanation about the program')
;`)



// trainees table
await client.query(`DROP TABLE IF EXISTS trainees`)

await client.query(`CREATE TABLE trainees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  phone INTEGER NOT NULL,
  email VARCHAR(255)
);`)


await client.query(`INSERT INTO 
trainees (name, surname, phone, email)
VALUES
('Lior', 'Raziel', 0545272656, 'liorazi5@gmail.com'), 
('Noy', 'Eli', 0545111222, 'lll@gmail.com')
;`)

// const results = await client.query(`select * from programs`)
//   console.log(results.rows);
}