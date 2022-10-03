import React from "react";
import "./_workout.scss";
// import { Copyright } from "../../Components/Copyright";
import { PresentationBlock } from '../../Components/PresentationBlock/index';
import {NuvBar} from '../../Components/Nuv/index'
import  powerlifting_woman  from "../../Assets/powerlifting_woman.webp";
import { Copyright } from "../../Components/Copyright";




export function Workout() {
    return(
    <form>
         <NuvBar/>
        <div className="page">
           
            <h1>Choose today's workout</h1>
                <div className="workout">
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
                <PresentationBlock
                    image = {powerlifting_woman}
                    workoutName = "Powerlifting"
                    description = "This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
                />
            </div>
        </div>
        <Copyright/>
    </form>
    )
    
}