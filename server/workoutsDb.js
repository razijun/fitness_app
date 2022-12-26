import { client } from './initDb.js';



export const getAllWorkouts = async()=>{
    const text = `SELECT * FROM workouts;`;
    const results = await client.query(text);
    return results.rows; 
  };
  
  export const getWorkoutByName = async(name)=>{
    console.log(name);
    const text = `SELECT * FROM workouts Where work_name = $1;`;
    const results = await client.query(text, [name] );
    return results.rows; 
  };
  
  export const addWorkouts = async(body)=>{
    const text = `INSERT INTO ProgramToTrainee (work_name, description, exercise_id) VALUES ($1, $2, $3) RETURNING *;`;
    console.log(text, [body.name, body.description, body.exercise]);
    const results = await client.query(text, [body.name, body.description, body.exercise]);
    return results.rows; 
  };

  export const removeWorkout = async(body)=>{
    const text = `DELETE FROM workouts WHERE (work_name) VALUES ($1) RETURNING *;`;
    console.log(text, [body.name]);
    const results = await client.query(text, [body.name]);
    return results.rows; 
  };

  //add setToExercise to workout by exerciseToWorkout
  export const addExerciseToWorkout = async(body)=>{
    const text = `INSERT INTO exerciseToWorkout (workout_id, setToExercise_id)
                  SELECT workout_id FROM workouts WHERE name VALUES ($1)
                  SELECT setToExercise_id FROM exercises WHERE name VALUES ($2) RETURNING *;`;//need to decide how to identify the exercise(name?)
    console.log(text, [body.workout_id, body.exercise_id]);
    const results = await client.query(text, [body.workout_id, body.exercise_id]);
    return results.rows; 
  };

  export const updateWorkout = async(body)=>{
    const text = `UPDATE workouts SET (work_name) VALUE ($1), (description) VALUE ($2), WHERE (work_name) VALUE ($3), RETURNING *;`;
    console.log(text, [body.name, body.description]);
    const results = await client.query(text, [body.name, body.description]);
    return results.rows; 
  };

  
