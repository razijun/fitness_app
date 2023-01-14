import React, { useEffect, useState } from "react";
import { ExerciseBox } from "../../Components/ExerciseBox";
import { Link } from "react-router-dom";
import "./startWorkout.scss";


export function StartWorkout() {

  const [exData, setExData] = useState([])

  useEffect(() => {
     setExData( <ExerciseBox/>)
  }, [])

  return (
    <div className="page">
      <div className="header">Enjoy your workout!</div>
      <div className="startWorkout">
        {exData}

      </div>
      <Link  className="finishBtn" to="/workout">Finish Workout</Link>

    </div>
  );
}
