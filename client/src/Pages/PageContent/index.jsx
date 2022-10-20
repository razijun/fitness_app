import React from "react";
import "./pageContent.scss";
import { Navbar } from "../../Components/Navbar/index";
import { Footer } from "../../Components/Footer";
import { StartWorkout } from "../StartWorkout/index";
import { Workout } from "../Workout/index";

import { Outlet } from 'react-router-dom';


export function PageContent() {
  return (
    <div className="mainContainer">
      <Navbar />
        <Workout/>
        <div>
          <Outlet/>
        </div>
      <Footer />
    </div>
  );
}
