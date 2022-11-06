import React from "react";
import "./pageContent.scss";
import { Navbar } from "../../Components/Navbar/index";
import { Footer } from "../../Components/Footer";
import { StartWorkout } from "../StartWorkout/index";
import { Workout } from "../Workout/index";

export function PageContent() {
  return (
    <div className="mainContainer">
      <Navbar />
      <StartWorkout/>

      <Footer />
    </div>
  );
}
