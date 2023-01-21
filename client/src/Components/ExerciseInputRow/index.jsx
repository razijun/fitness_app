import React, { useEffect } from "react";
import "./exerciseInputRow.scss";
import { FiXCircle } from "react-icons/fi";


export function ExerciseInputRow(props) {
  const { setNumber, removeElement, id} = props;
  
  useEffect(() => {
    // console.log(props);
    
  }, []);
  return (
      <li className="inputRow" id = {id} >
        <div className="setNum">{setNumber}</div>
        <input type="text" placeholder="REPS" name="reps" />
        <input type="text" placeholder="WEIGHT" name="weight" />
        <button className="removeBtn" onClick={removeElement}>
          <FiXCircle color="red" fontSize={14} />
        </button>
      </li>
  );
}
