import { client } from './initDb.js';

export const getAllSetToEx = async()=>{
  const text = `SELECT *
                FROM setToExercise JOIN exercises
                ON setToExercise.exercise_id = exercises.exercise_id
                JOIN sets 
                ON setToExercise.set_id = sets.set_id
                ;`;
  const results = await client.query(text);
  return results.rows; 
};

export const getAllFullTrainees = async()=>{
    const text = `SELECT * FROM trainees
                  JOIN workoutToTrainee
                  ON trainees.trainee_id = workoutToTrainee.trainee_id
                  JOIN  exerciseToWorkout
                  ON exerciseToWorkout.exerciseToWorkout_id = workoutToTrainee.exerciseToWorkout_id
                  JOIN workouts
                  ON workouts.workout_id = exerciseToWorkout.workout_id 
                  JOIN setToExercise
                  ON setToExercise.setToExercise_id = exerciseToWorkout.setToExercise_id 
                  JOIN exercises
                  ON exercises.exercise_id = setToExercise.exercise_id
                  JOIN sets
                  ON sets.set_id = setToExercise.set_id
                  ;`;
    const results = await client.query(text);
    return results.rows; 
  };

  export const getAllFullWorkouts = async()=>{
    const text = `SELECT * FROM workouts
                  JOIN  exerciseToWorkout
                  ON workouts.workout_id = exerciseToWorkout.workout_id 
                  JOIN setToExercise
                  ON setToExercise.setToExercise_id = exerciseToWorkout.setToExercise_id 
                  JOIN exercises
                  ON exercises.exercise_id = setToExercise.exercise_id
                  ;`;
    const results = await client.query(text);
    return results.rows; 
  };

  export const getWorkExByName = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM workouts 
                  JOIN  exerciseToWorkout
                  ON workouts.workout_id = exerciseToWorkout.workout_id 
                  JOIN setToExercise
                  ON setToExercise.setToExercise_id = exerciseToWorkout.setToExercise_id 
                  JOIN exercises
                  ON exercises.exercise_id = setToExercise.exercise_id
                  WHERE work_name = $1
                  ;`;
    const results = await client.query(text, [name]);
    return results.rows; 
  };

