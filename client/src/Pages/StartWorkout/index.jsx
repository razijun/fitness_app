import React, { useEffect, useState} from "react";
import { ExerciseBox } from "../../Components/ExerciseBox";
import { PresentationBlock } from "../../Components/PresentationBlock/index";
import { Link, useLocation } from "react-router-dom";
import "./startWorkout.scss";
import axios from "axios";


export function StartWorkout() {
  const location = useLocation();
  const [data, setData] = useState([])
  // const workoutName = "A"
  useEffect(() => {
     axios.get(`http://localhost:3001/getWorkDataByName/${location.state.workoutName}`).then((res)=>{
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
      <Link  className="finishBtn" to="/workout">Finish Workout</Link>

    </div>
  );
}
