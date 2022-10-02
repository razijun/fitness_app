import React from "react";
import "./_workout.sass";
import { Copyright } from "../../Components/Copyright";
import { presentationBlock } from '../../Components/PresentationBlock/index';



export function Workout() {
    return(
    <form>
        <div className="workout">
        <h1>Choose today's workout</h1>
            <presentationBlock/>
        </div>
        <Copyright/>
    </form>
    )
    
}