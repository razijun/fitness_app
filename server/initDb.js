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
  description VARCHAR(255) NOT NULL
);`)


await client.query(`INSERT INTO 
workouts (name, description)
VALUES
('A', 'Pull workout'), 
('B', 'Push workout')
;`)



// programs table
await client.query(`DROP TABLE IF EXISTS programs CASCADE;`)

await client.query(`CREATE TABLE programs (
  program_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,

);`)


await client.query(`INSERT INTO 
programs (name, description)
VALUES
('Strength Program', 'explanation about the program'), 
('Muscle Building Program', 'explanation about the program')
;`)



// trainees table
await client.query(`DROP TABLE IF EXISTS trainees CASCADE`)

await client.query(`CREATE TABLE trainees (
  trainee_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  phone CHAR(15) NOT NULL,
  email VARCHAR(255),
);`)

await client.query(`INSERT INTO 
trainees (name, surname, phone, email)
VALUES
('Lior', 'Raziel', 0545272656, 'liorazi5@gmail.com'), 
('Noy', 'Eli', 0545111222, 'lll@gmail.com')
;`)


//     exerciseToWorkout table
await client.query(`DROP TABLE IF EXISTS exerciseToWorkout CASCADE;`)

await client.query(`CREATE TABLE exerciseToWorkout (
  exerciseToWorkout_id SERIAL PRIMARY KEY,
  workout_id INTEGER,
  exercise_id INTEGER,

  CONSTRAINT exercise_id
  FOREIGN KEY (exercise_id) 
  REFERENCES exercises(exercise_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT workout_id
  FOREIGN KEY (workout_id) 
  REFERENCES workout(workout_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`)


await client.query(`INSERT INTO 
exerciseToWorkout (workout_id, exercise_id)
VALUES
(1,1),
(2,2)
;`)

// workoutToProgram table  
await client.query(`DROP TABLE IF EXISTS workoutToProgram CASCADE;`)

await client.query(`CREATE TABLE workoutToProgram (
  workoutToProgram_id SERIAL PRIMARY KEY,
  program_id INTEGER,
  workout_id INTEGER,

  CONSTRAINT workout_id
  FOREIGN KEY (workout_id) 
  REFERENCES workout(workout_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT program_id
  FOREIGN KEY (program_id) 
  REFERENCES program(program_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`)


await client.query(`INSERT INTO 
exerciseToWorkout (program_id, workout_id )
VALUES
(1,1),
(2,2)
;`)

// ProgramToTrainee table  
await client.query(`DROP TABLE IF EXISTS ProgramToTrainee CASCADE;`)

await client.query(`CREATE TABLE ProgramToTrainee (
  ProgramToTrainee_id SERIAL PRIMARY KEY,
  program_id INTEGER,
  trainee_id INTEGER,

  CONSTRAINT trainee_id
  FOREIGN KEY (trainee_id) 
  REFERENCES trainees(trainee_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT program_id
  FOREIGN KEY (program_id) 
  REFERENCES programs(program_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`)


await client.query(`INSERT INTO 
exerciseToWorkout (trainee_id, program_id)
VALUES
(1,1),
(2,2)
;`)


// const results = await client.query(`select * from programs`)
//   console.log(results.rows);
}