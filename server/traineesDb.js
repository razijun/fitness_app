import { client } from './initDb.js';



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

// need to check it and make it with username and password
export const removeTrainee = async(body)=>{
  const text = `DELETE FROM trainees WHERE (name, surname, phone, email, program_id) VALUES ($1, $2, $3, $4) RETURNING *;`;
  console.log(text, [body.name, body.surname, body.phone, body.email, body.program]);
  const results = await client.query(text, [body.name, body.surname, body.phone, body.email, body.program]);
  return results.rows; 
};


  // Todo add program to trainee by exerciseToWorkout
  export const addWorkoutToTrainee = async(body)=>{
    const text = `INSERT INTO workoutToTrainee (trainee_id, workout_id)
                  SELECT trainee_id FROM trainees WHERE name VALUES ($1)
                  SELECT workout_id FROM workouts WHERE name VALUES ($2) RETURNING *;`;
    console.log(text, [body.trainee_id, body.workout_id]);
    const results = await client.query(text, [body.trainee_id, body.workout_id]);
    return results.rows; 
  };

  export const updateTrainee = async(body)=>{
    const text = `UPDATE trainees SET (name) VALUE ($1), (surname) VALUE ($2), (email) VALUE ($3), (phone) VALUE ($4), WHERE (email) VALUE ($5) RETURNING *;`;
    console.log(text, [body.name, body.surname, body.email, body.phone ]);
    const results = await client.query(text, [body.name, body.surname, body.email, body.phone]);
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



