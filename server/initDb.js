import pkg from 'pg'
const {Client} =  pkg
import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.DATABASE_URL)

export const client = new Client({
    connectionString:process.env.DATABASE_URL,
    ssl:{rejectUnauthorized:false}
})

export const initDB= async()=>{
client.connect();

// await client.query('DROP * FROM information_schema.tables;')
// await client.query('CREATE SCHEMA public')
// exercises table
await client.query(`DROP TABLE IF EXISTS exercises CASCADE;`)
await client.query(`CREATE TABLE exercises (
  exercise_id SERIAL PRIMARY KEY,
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

// workouts table
await client.query(`DROP TABLE IF EXISTS workouts CASCADE;`)

await client.query(`CREATE TABLE workouts (
  workout_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  exercise_id INTEGER,

  CONSTRAINT exercise_id
  FOREIGN KEY (exercise_id) 
  REFERENCES exerciseS(exercise_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`)


await client.query(`INSERT INTO 
workouts (name, description, exercise_id)
VALUES
('A', 'Pull workout', 1), 
('B', 'Push workout', 2)
;`)



// programs table
await client.query(`DROP TABLE IF EXISTS programs CASCADE;`)

await client.query(`CREATE TABLE programs (
  program_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  workout_id INTEGER,

  CONSTRAINT workout_id
  FOREIGN KEY (workout_id) 
  REFERENCES workouts(workout_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`)


await client.query(`INSERT INTO 
programs (name, description, workout_id)
VALUES
('Strength Program', 'explanation about the program', 1), 
('Muscle Building Program', 'explanation about the program',2)
;`)



// trainees table
await client.query(`DROP TABLE IF EXISTS trainees CASCADE`)

await client.query(`CREATE TABLE trainees (
  trainee_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  phone CHAR(15) NOT NULL,
  email VARCHAR(255),
  program_id INTEGER,

  CONSTRAINT program_id
  FOREIGN KEY (program_id) 
  REFERENCES programs(program_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`)

await client.query(`INSERT INTO 
trainees (name, surname, phone, email, program_id)
VALUES
('Lior', 'Raziel', 0545272656, 'liorazi5@gmail.com', 1), 
('Noy', 'Eli', 0545111222, 'lll@gmail.com', 2)
;`)

// const results = await client.query(`select * from programs`)
//   console.log(results.rows);
}