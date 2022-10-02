import React from "react";
import { SubmitButton } from "../SubmitButton";
import "./_presentationBlock.sass";

export function presentationBlock(props) {
    const {workoutName, description} = props;
    return(
    <form>
        <div className="presentationBlock">
            <img src="###" alt="workout image"/>
            <p>{workoutName}</p>
            <div>{description}</div>
            <div>
                <SubmitButton label = "Start"/>
                <SubmitButton label = "View"/>

            </div>

        </div>
    </form>
    )
    
}