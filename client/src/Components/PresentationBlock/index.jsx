import "./presentation.scss";
import {useNavigate } from "react-router-dom";

export function PresentationBlock(props) {
    const {image, workKey, workoutDesc, workoutName} = props;
    const navigate = useNavigate();
    
    const pathUrl=()=>{
        navigate("/workout/start", {state:{workoutName: workoutName}});
    }
    return(
        <div className="presentationBlock" key={workKey}>
            <img className="workoutImg" src = {image} alt="workout"/>
            <div className="descriptionContainer">
                <h5 className="workoutName">{workoutName}</h5>
                <div className="description">{workoutDesc}</div>
                <div className="buttonsContainer">
                <button  href="#" className="start" onClick={()=>{pathUrl()}} >Start</button>
                <button className="view">View</button>
                </div>
            </div>
            

        </div>
    )
    
}