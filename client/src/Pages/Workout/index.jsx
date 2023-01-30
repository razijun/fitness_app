import "./_workout.scss";
import { PresentationBlock } from "../../Components/PresentationBlock/index";
import powerlifting_woman from "../../Assets/powerlifting_woman.webp";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export function Workout() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
     axios.get("http://localhost:3001/getAllWorkouts").then((res)=>{
    setData(res.data);
    console.log(res.data);
    })

   
  }, []);

  useEffect(()=>{
    const guestId = window.localStorage.getItem('GUEST_ID');
    const userId = window.localStorage.getItem('USER_ID');
    if(guestId == null && userId == null) {
      window.localStorage.setItem('GUEST_ID', JSON.stringify(uuidv4()));
      axios.post("http://localhost:3001/addTrainee", {uuid: guestId, name: 'guest'})
      .then((res)=>{
      console.log(res);
      })
      .catch((err)=>{
        console.log(err.response);
      })
  };
  },[]);
  

  return (
    <div className="page">
      <div className="header">Choose today's workout</div>
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
