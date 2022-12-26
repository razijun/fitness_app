import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.DATABASE_URL);


export const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: process.env.Client_PASSWORD,
  // connectionString: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false },
});

export const initDB = async () => {
  client.connect();

  // sets table
  await client.query(`DROP TABLE IF EXISTS sets CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS sets (
  set_id SERIAL PRIMARY KEY,
  weight CHAR(255),
  reps CHAR(225)
);`);

  await client.query(`INSERT INTO 
  sets (weight, reps)
  VALUES
  (10, 12),
  (13, 8),
  (11, 9)
;`);

  // exercises table
  await client.query(`DROP TABLE IF EXISTS exercises CASCADE;`); 
  await client.query(`CREATE TABLE IF NOT EXISTS exercises (
  exercise_id SERIAL PRIMARY KEY,
  ex_name VARCHAR(255) NOT NULL,
  muscle VARCHAR(255) NOT NULL,
  ex_desc VARCHAR(255) NOT NULL
);`);

  await client.query(`INSERT INTO 
exercises (ex_name, muscle, ex_desc)
VALUES
('Squat', 'Legs', 'explanation about the exercise'), 
('Bench', 'Chest', 'explanation about the exercise')
;`);

  // workouts table
  await client.query(`DROP TABLE IF EXISTS workouts CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS workouts (
  workout_id SERIAL PRIMARY KEY,
  work_name VARCHAR(255) NOT NULL,
  work_desc VARCHAR(255) NOT NULL
);`);

  await client.query(`INSERT INTO 
workouts (work_name, work_desc)
VALUES
('A', 'Pull workout'), 
('B', 'Push workout')
;`);

  // // trainees table
  await client.query(`DROP TABLE IF EXISTS trainees CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS trainees (
  trainee_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  phone CHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL
);`);

  await client.query(`INSERT INTO 
trainees (name, surname, phone, email)
VALUES
('Lior', 'Raziel', 0545272656, 'liorazi5@gmail.com'), 
('Noy', 'Eli', 0545111222, 'lll@gmail.com')
;`);

  //setToExercise table

  await client.query(`DROP TABLE IF EXISTS setToExercise CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS setToExercise (
  setToExercise_id SERIAL PRIMARY KEY,
  exercise_id INTEGER,
  set_id INTEGER,


  CONSTRAINT exercise_id
  FOREIGN KEY (exercise_id) 
  REFERENCES exercises(exercise_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT set_id
  FOREIGN KEY (set_id) 
  REFERENCES sets(set_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`);

  await client.query(`INSERT INTO 
setToExercise (exercise_id, set_id)
VALUES
(1,1),
(1,3),
(2,1)
;`);

//   //     exerciseToWorkout table
  await client.query(`DROP TABLE IF EXISTS exerciseToWorkout CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS exerciseToWorkout (
  exerciseToWorkout_id SERIAL PRIMARY KEY,
  workout_id INTEGER,
  setToExercise_id INTEGER,

  CONSTRAINT workout_id
  FOREIGN KEY (workout_id) 
  REFERENCES workouts(workout_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT setToExercise_id
  FOREIGN KEY (setToExercise_id) 
  REFERENCES setToExercise(setToExercise_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`);

  await client.query(`INSERT INTO 
exerciseToWorkout (workout_id, setToExercise_id)
VALUES
(1,1),
(1,2),
(2,2)
;`);

//   //  workoutToTrainee table
  await client.query(`DROP TABLE IF EXISTS workoutToTrainee CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS workoutToTrainee (
  workoutToTrainee_id SERIAL PRIMARY KEY,
  trainee_id INTEGER,
  exerciseToWorkout_id INTEGER,

  CONSTRAINT trainee_id
  FOREIGN KEY (trainee_id) 
  REFERENCES trainees(trainee_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT exerciseToWorkout_id
  FOREIGN KEY (exerciseToWorkout_id) 
  REFERENCES exerciseToWorkout(exerciseToWorkout_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`);

  await client.query(`INSERT INTO 
workoutToTrainee (trainee_id ,exerciseToWorkout_id)
VALUES
(1,1),
(2,2)
;`);
};


