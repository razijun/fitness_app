import React from "react";
import "./pageContent.scss";
import { Navbar } from "../../Components/Navbar/index";
import { Footer } from "../../Components/Footer";
import { Outlet } from "react-router-dom";

export function PageContent() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}
