import React from "react";
import "./exerciseInputRow.scss";
import { FiXCircle } from "react-icons/fi";

export function ExerciseInputRow(props) {
  const { setNumber } = props;
  return (
    <form className="inputRow">
      <div className="setNum">{setNumber}</div>
      <input type="text" placeholder="REPS" name="reps" />
      <input type="text" placeholder="WEIGHT" name="weight" />
      <button>
        <FiXCircle
          color="black"
        />
      </button>
    </form>
  );
}
