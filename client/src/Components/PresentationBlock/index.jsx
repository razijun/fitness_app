import React from "react";
import "./presentation.scss";

export function PresentationBlock(props) {
    const {workoutName, description, image} = props;
    return(
        <div className="presentationBlock">
            <img className="workoutImg" src = {image} alt="workout"/>
            <div className="descriptionContainer">
                <h5 className="workoutName">{workoutName}</h5>
                <div className="description">{description}</div>
                <div className="buttonsContainer">
                    <button className="start">Start</button>
                    <button className="view">View</button>
                </div>
            </div>
            

        </div>
    )
    
}