import React from "react";
import "./_workout.scss";
import { PresentationBlock } from "../../Components/PresentationBlock/index";
import powerlifting_woman from "../../Assets/powerlifting_woman.webp";

export function Workout() {
  return (
      <div className="page">
        <div className="header">Choose today's workout</div>
        <div className="workout">

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />

          <PresentationBlock
            image={powerlifting_woman}
            workoutName="Powerlifting"
            description="This workout centered around core exercises and in particular, the bench press, dead lifts and squats. "
          />
        </div>
      </div>
  );
}
