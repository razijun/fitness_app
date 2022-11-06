import React, { useState } from "react";
import { ExerciseBox } from "../../Components/ExerciseBox";
import { Link } from "react-router-dom";
import "./startWorkout.scss";

export function StartWorkout() {

  const [exerciseDescription, setExerciseDescription] = useState([<ExerciseBox/>, <ExerciseBox/>, <ExerciseBox/>]); 


  const mapExerciseBox = exerciseDescription.map((thisDescription, idx) => (
    <ExerciseBox
      exerciseName = {"Squat"}
      exerciseDescription={`in these exercise we need to lowers the hips from a standing position and then stands back up
      Do 4-sets-8-9 2 minutes rest. week 1 & 2 3-4 RIR weeks 3 & 4 0-2 RIR `}
      key = {idx}
    />
  ))
  return (
    <div className="page">
      <div className="header">Enjoy your workout!</div>
      <div className="startWorkout">
        {mapExerciseBox}

      </div>
      <Link  className="finishBtn" to="/workout">Finish Workout</Link>

    </div>
  );
}
