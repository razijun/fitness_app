import "./presentation.scss";
import { Link } from "react-router-dom";

export function PresentationBlock(props) {
    const {image, workKey, workoutDesc, workoutName} = props;

 

    return(
        <div className="presentationBlock" key={workKey}>
            <img className="workoutImg" src = {image} alt="workout"/>
            <div className="descriptionContainer">
                <h5 className="workoutName">{workoutName}</h5>
                <div className="description">{workoutDesc}</div>
                <div className="buttonsContainer">
                <Link  className="start" to="/workout/start">Start</Link>
                <button className="view">View</button>
                </div>
            </div>
            

        </div>
    )
    
}