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
('Squat', 'Legs', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Deadlift', 'Legs', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Seated Leg Press', 'Legs', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Leg Extension', 'Legs', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Leg Curl', 'Legs', '3 sets - 8-12 reps - 90s - 120s rests'),
('Hip Thrust', 'Legs', '3 sets - 8-12 reps - 90s - 120s rests'),

('Bench Press', 'chest', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Incline Dumbbell Press', 'chest', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Cable Chest Flys', 'chest', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Dips', 'chest', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Pushups', 'chest', '3 sets - 8-12 reps - 90s - 120s rests'), 

('overhead Press', 'shoulders', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Seated Dumbbell Shoulder Press', 'shoulders', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Dumbbell Shoulder Abduction', 'shoulders', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Dumbbell Shoulder Flexion', 'shoulders', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Cable Rear Delt Fly', 'shoulders', '3 sets - 8-12 reps - 90s - 120s rests'), 

('pull-Up', 'back', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Lat Pulldown', 'back', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Seated Narrow Grip Cable Row', 'back', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Seated Wide Grip Cable Row', 'back', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Cable pullover', 'back', '3 sets - 8-12 reps - 90s - 120s rests'), 
('chin-up', 'back', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Back Extensions on Hyperextension Bench', 'back', '3 sets - 8-12 reps - 90s - 120s rests'), 

('Incline Dumbbell Curl', 'biceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Hammer Curl', 'biceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('EZ-Bar Curl', 'biceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Cable Curl', 'biceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('EZ-Bar Reverse Grip Curl', 'biceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Standing Dumbbell Curl', 'biceps', '3 sets - 8-12 reps - 90s - 120s rests'), 

('Dumbbell Overhead Tricep Extension', 'triceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Rope Overhead Triceps Extension', 'triceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Tricep V-Bar Pushdown', 'triceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Tricep Rope Pushdown', 'triceps', '3 sets - 8-12 reps - 90s - 120s rests'), 
('Skull Crushers', 'triceps', '3 sets - 8-12 reps - 90s - 120s rests')

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
('Legs', 'Get stronger legs wider quads and juicier glutes with this great exercises'), 
('Back', 'For a wider stronger back and healthy form we combined the best back exercises'),
('Chest', 'In this workout we are going to push a lot in order to get this pectoralis popping'),
('Shoulders', 'Sculpt your upper body through this shoulder strength training that can improve day to day function'),
('Arms', 'No matter if your goal is size, strength or definition this arm exercises will help you achieve it.'),
('Full Body', 'A great workout split for those who short in time requiring only 2 to 3 workouts per week')

;`);

  // // trainees table
  await client.query(`DROP TABLE IF EXISTS trainees CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS trainees (
  trainee_id SERIAL PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255),
  phone CHAR(15),
  email VARCHAR(255)
);`);

  await client.query(`INSERT INTO 
trainees (uuid, name, surname, phone, email)
VALUES
('e4cf1410-db58-4b27-a29a-7808be7491c3','Lior', 'Raziel', 0545272656, 'liorazi5@gmail.com');`);

  //setToExercise table

  await client.query(`DROP TABLE IF EXISTS setToExercise CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS setToExercise (
  setToExercise_id SERIAL PRIMARY KEY,
  trainee_id INTEGER NOT NULL,
  workout_id INTEGER NOT NULL,
  exercise_id INTEGER NOT NULL,
  set_id INTEGER NOT NULL,
  date TIMESTAMP NOT NULL,


  CONSTRAINT exercise_id
  FOREIGN KEY (exercise_id) 
  REFERENCES exercises(exercise_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT set_id
  FOREIGN KEY (set_id) 
  REFERENCES sets(set_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT workout_id
  FOREIGN KEY (workout_id) 
  REFERENCES workouts(workout_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT trainee_id
  FOREIGN KEY (trainee_id) 
  REFERENCES trainees(trainee_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`);

  await client.query(`INSERT INTO 
setToExercise (trainee_id, workout_id ,exercise_id, set_id, date)
VALUES
(1,1,1,1, NOW())

;`);

//exerciseToWorkout table
  await client.query(`DROP TABLE IF EXISTS exerciseToWorkout CASCADE;`);

  await client.query(`CREATE TABLE IF NOT EXISTS exerciseToWorkout (
  exerciseToWorkout_id SERIAL PRIMARY KEY,
  workout_id INTEGER NOT NULL,
  exercise_id INTEGER NOT NULL,

  CONSTRAINT workout_id
  FOREIGN KEY (workout_id) 
  REFERENCES workouts(workout_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT exercise_id
  FOREIGN KEY (exercise_id) 
  REFERENCES exercises(exercise_id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);`);

  await client.query(`INSERT INTO 
exerciseToWorkout (workout_id, exercise_id)
VALUES
(1,2),
(1,3),
(1,4),
(1,5),

(2,17),
(2,19),
(2,20),
(2,23),

(3,7),
(3,8),
(3,9),
(3,10),

(4,12),
(4,13),
(4,14),
(4,16),

(5,29),
(5,34),
(5,27),
(5,33),
(5,25),
(5,31),

(6,1),
(6,7),
(6,12),
(6,18),
(6,29),
(6,32)
;`);

//   //  workoutToTrainee table
//   await client.query(`DROP TABLE IF EXISTS workoutToTrainee CASCADE;`);

//   await client.query(`CREATE TABLE IF NOT EXISTS workoutToTrainee (
//   workoutToTrainee_id SERIAL PRIMARY KEY,
//   trainee_id INTEGER,
//   workout_id INTEGER,

//   CONSTRAINT trainee_id
//   FOREIGN KEY (trainee_id) 
//   REFERENCES trainees(trainee_id)
//   ON DELETE SET NULL
//   ON UPDATE CASCADE,

//   CONSTRAINT workout_id
//   FOREIGN KEY (workout_id) 
//   REFERENCES workouts(workout_id)
//   ON DELETE SET NULL
//   ON UPDATE CASCADE
// );`);

//   await client.query(`INSERT INTO 
// workoutToTrainee (trainee_id ,workout_id)
// VALUES
// (1,1),
// (2,2)
// ;`);
};


