import "../Workout/_workout.scss";
import { PresentationBlock } from "../../Components/PresentationBlock/index";
import powerlifting_woman from "../../Assets/powerlifting_woman.webp";
import { useEffect, useState } from "react";
import axios from "axios";

export function FinishedWorkouts() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
     axios.get("http://localhost:3001/getAllWorkouts").then((res)=>{
    setData(res.data);
    console.log(res.data);
    })

  }, []);
  

  return (
    <div className="page">
      <div className="header">Track Your Progress</div>
      <div className="workout">
        { data.map((option, i) => ( 
        <PresentationBlock
          key={i}
          image={powerlifting_woman}
          workoutName={option.work_name}
          workoutDesc={option.work_desc}
        />
      ))}
      </div>
    </div>
  );
}
