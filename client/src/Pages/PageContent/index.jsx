import React from "react";
import "./pageContent.scss";
import { Navbar } from "../../Components/Navbar/index";
import { Footer } from "../../Components/Footer";
import { Workout } from "../Workout";

export function PageContent() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Workout/>
      <Footer />
    </div>
  );
}
