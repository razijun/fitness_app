import React from "react";
import { ExerciseInputRow } from "../ExerciseInputRow";
import "./exerciseBox.scss";

export function ExerciseBox(props) {
  const { exerciseName, exerciseDescription } = props;
  return (
      <div className="exerciseBox">
        <div className="descriptionContainer">
          <div className="exerciseName">{exerciseName}</div>
          <div className="exerciseDescription">{exerciseDescription}</div>
          <div className="inputHeaders">
            <div className="set"> SET</div>
            <div className="reps"> REPS</div>
            <div className="weight"> WEIGHT</div>
            <div className="transparencyDiv"></div>
          </div>
            <ExerciseInputRow 
              setNumber = '1'
            />
            <ExerciseInputRow 
              setNumber = '2'
            />
            <div>
              <button className="addSet">Add Set</button>
              <button className="addNote">Add Notes</button>
            </div>
        </div>
      </div>
  );
}
