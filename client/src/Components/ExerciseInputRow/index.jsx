import React, { useEffect } from "react";
import "./exerciseInputRow.scss";
import { FiXCircle } from "react-icons/fi";
import { useState } from "react";


export function ExerciseInputRow(props) {
  const { setNumber, removeElement, id} = props;
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  // useEffect(()=>{
  //   const data = window.localStorage.getItem(JSON.stringify(id)+'WEIGHT_INPUT');
  //   if (data !== null) setWeight(JSON.parse(data))
  // }, [])

  // useEffect(()=>{
  //   window.localStorage.setItem(JSON.stringify(id)+'WEIGHT_INPUT', JSON.stringify(weight));
  //   window.localStorage.setItem(JSON.stringify(id)+'REPS_INPUT', JSON.stringify(reps));

  // }, [weight, reps])
  return (
      <li className="inputRow" id = {id} >
        <div className="setNum">{setNumber}</div>
        <input type="text" placeholder="REPS" name="reps" value={reps} onChange={e=> setReps(e.target.value)}/>
        <input type="text" placeholder="WEIGHT" name="weight" value={weight} onChange={e=> setWeight(e.target.value)}/>
        <button className="removeBtn" onClick={removeElement}>
          <FiXCircle color="red" fontSize={14} />
        </button>
      </li>
  );
}
