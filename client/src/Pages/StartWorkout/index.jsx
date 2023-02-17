import React, { useEffect, useState} from "react";
import { ExerciseBox } from "../../Components/ExerciseBox";
import { Link, useLocation } from "react-router-dom";
import "./startWorkout.scss";
import axios from "axios";


export function StartWorkout() {
  const location = useLocation();
  const name = location.state.workoutName;
  const [data, setData] = useState([])
  useEffect(() => {
     axios.get(`http://localhost:3001/getWorkDataByName/${name}`).then((res)=>{
    console.log(res.data);
    setData(res.data);
    })
  }, []);
  
  

  return (
    <div className="page">
      <div className="header">Enjoy your workout!</div>
      <div className="startWorkout">
        {data.map((option, i) => (
        <ExerciseBox
        key = {i}
        exerciseDescription = {option.ex_desc}
        exerciseName = {option.ex_name}/>
        ))}

      </div>
      <Link  className="finishBtn" to="/workout/profile" >Finish Workout</Link>

    </div>
  );
}
