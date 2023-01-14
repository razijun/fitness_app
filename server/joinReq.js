import { client } from './initDb.js';

export const insertExToWrk = async()=>{
  const text =`INSERT INTO exerciseToWorkout(workout_id, exercise_id)
                SELECT w.workout_id, e.exercise_id 
                FROM workouts w, exercises e;`;
  const results = await client.query(text)
  return results.rows; 
};

export const insertSetToEx = async()=>{
  const text =`INSERT INTO setToExercise(exercise_id, set_id)
  SELECT e.exercise_id, s.set_id 
  FROM exercises e, sets s;`;
  const results = await client.query(text)
  return results.rows; 
};

export const insertWorkToTrainee = async()=>{
  const text =`INSERT INTO workoutToTrainee (trainee_id ,workout_id)
  SELECT t.trainee_id, w.workout_id 
  FROM trainees t, workouts w;`;
  const results = await client.query(text)
  return results.rows; 
};

// export const getAllSetToEx = async()=>{
//   const text = `SELECT *
//                 FROM setToExercise JOIN exercises
//                 ON setToExercise.exercise_id = exercises.exercise_id
//                 JOIN sets 
//                 ON setToExercise.set_id = sets.set_id
//                 ;`;
//   const results = await client.query(text);
//   return results.rows; 
// };

export const getAllTraineesData = async()=>{
    const text = `SELECT * FROM trainees
                  JOIN workoutToTrainee
                  ON trainees.trainee_id = workoutToTrainee.trainee_id
                  JOIN  exerciseToWorkout
                  ON exerciseToWorkout.workout_id = workoutToTrainee.workout_id
                  JOIN workouts 
                  ON workouts.workout_id = exerciseToWorkout.workout_id 
                  JOIN setToExercise
                  ON setToExercise.exercise_id = exerciseToWorkout.exercise_id 
                  JOIN exercises
                  ON exercises.exercise_id = setToExercise.exercise_id
                  JOIN sets
                  ON sets.set_id = setToExercise.set_id
                  ;`;
    const results = await client.query(text);
    return results.rows; 
  };

  export const getTraineeDataByName= async(name)=>{
    console.log(name);
    const text = `SELECT * FROM trainees
                  JOIN workoutToTrainee
                  ON trainees.trainee_id = workoutToTrainee.trainee_id
                  JOIN  exerciseToWorkout
                  ON exerciseToWorkout.workout_id = workoutToTrainee.workout_id
                  JOIN workouts 
                  ON workouts.workout_id = exerciseToWorkout.workout_id 
                  JOIN setToExercise
                  ON setToExercise.exercise_id = exerciseToWorkout.exercise_id 
                  JOIN exercises
                  ON exercises.exercise_id = setToExercise.exercise_id
                  JOIN sets
                  ON sets.set_id = setToExercise.set_id
                  WHERE name = $1
                  ;`;
    const results = await client.query(text, [name]);
    return results.rows; 
  };



  export const getAllWorkoutsData = async()=>{
    const text = `SELECT * FROM workouts
                  JOIN exerciseToWorkout
                  ON workouts.workout_id = exerciseToWorkout.workout_id 
                  JOIN setToExercise
                  ON setToExercise.exercise_id = exerciseToWorkout.exercise_id 
                  JOIN exercises
                  ON exercises.exercise_id = setToExercise.exercise_id
                  JOIN sets
                  ON sets.set_id = setToExercise.set_id
                  ;`;
    const results = await client.query(text);
    return results.rows; 
  };

  export const getWorkDataByName = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM workouts
                  JOIN exerciseToWorkout
                  ON workouts.workout_id = exerciseToWorkout.workout_id 
                  JOIN setToExercise
                  ON setToExercise.exercise_id = exerciseToWorkout.exercise_id 
                  JOIN exercises
                  ON exercises.exercise_id = setToExercise.exercise_id
                  JOIN sets
                  ON sets.set_id = setToExercise.set_id
                  WHERE work_name = $1
                  ;`;
    const results = await client.query(text, [name]);
    return results.rows; 
  };

