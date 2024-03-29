import React, { useState } from "react";
import { useEffect } from "react";
import { DescriptionPopup } from "../DescriptionPopup";
import { ExerciseInputRow } from "../ExerciseInputRow";
import "./exerciseBox.scss";

export function ExerciseBox(props) {
  const {exKey, exerciseDescription, exerciseName} = props

  const [popup, setPopup] = useState();
  const onEditDescription = () => {
    setPopup( <DescriptionPopup editDescription = {exerciseDescription}/>)
  };

  const [inputOfSet, setInputOfSet] = useState([<ExerciseInputRow  />]); 

  const removeElement = (idx) => {
    setInputOfSet(inputOfSet.filter((_, i)=> i !== idx))
    console.log(idx);
  };

  const onAddBtnClick = () => {
    setInputOfSet([
      ...inputOfSet,
      <ExerciseInputRow  />,
    ]);
    console.log(inputOfSet);
  };

  const addSet = inputOfSet.map((oneSet, idx) => (
    <ExerciseInputRow
      key = {exerciseName + idx}
      id = {exerciseName + idx}
      setNumber = {idx+1}
      removeElement={(()=>removeElement(idx))}

    />
  ))


  return (
    <div className="exerciseBox">
      <div className="popup">{popup}</div>
        <div className="descriptionContainer" key={exKey}>
        <div className="exerciseName">{exerciseName}</div>
        <div className="exerciseDescription">{exerciseDescription}</div>
        <div className="inputHeaders">
          <div className="set"> SET</div>
          <div className="reps"> REPS</div>
          <div className="weight"> WEIGHT</div>
          <div className="transparencyDiv"></div>
        </div>
        <ul className="inputOfSet">
          {addSet}
        </ul>
        <div className="addButtons">
          <button className="addSet" onClick={onAddBtnClick}>
            Add Set
          </button>
          <button className="addNote" onClick={onEditDescription}>
            Add Notes
          </button>
        </div>
      </div>
    </div>
  );
}
