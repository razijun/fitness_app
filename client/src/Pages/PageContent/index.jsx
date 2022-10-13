import React from "react";
import "./pageContent.scss";
import { Navbar } from "../../Components/Navbar/index";
import { Footer } from "../../Components/Footer";
import { Workout } from "../Workout";
import { StartWorkout } from "../StartWorkout";

export function PageContent() {
  return (
    <div className="mainContainer">
      <Navbar />
      <StartWorkout/>
      {/* <Workout/> */}
      <Footer />
    </div>
  );
}
