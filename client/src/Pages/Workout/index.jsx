import "./_workout.scss";
import { PresentationBlock } from "../../Components/PresentationBlock/index";
import powerlifting_woman from "../../Assets/powerlifting_woman.webp";
import { useEffect, useState } from "react";
import axios from "axios";


export function Workout() {
  
  const [workKey, setWorkKey] = useState("")
  const [workoutName, setWorkoutName] = useState("")
  const [workoutDesc, setWorkoutDesc] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/getAllWorkouts").then((res)=>{
      const data = res.data
      data.map((work, i)=> (
          setWorkKey(i),
          setWorkoutName(work.work_name),
          setWorkoutDesc(work.work_desc)
      ))
    })
  }, [])

  return (
      <div className="page">
        <div className="header">Choose today's workout</div>
        <div className="workout">

          <PresentationBlock
            image={powerlifting_woman}
            key = {workKey}
            workoutName = {workoutName}
            workoutDesc = {workoutDesc} 

          />

        </div>
      </div>
  );
}
