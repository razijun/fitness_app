import React from "react";
import "./homepage.scss";
import { Footer } from "../../Components/Footer";
import homepage_banner1 from "../../Assets/homepage_banner1.png";
import { Link } from "react-router-dom";

export function Homepage() {
  return (

      <div className="homepage">
        <img
          className="homepage_banner"
          src={homepage_banner1}
          alt="Homepage banner"
        />
        <div className="siteDescription">
          Take on guided training programs that will help you to truck your
          workouts, be consistent and most importantly enjoy the process of
          getting stronger and fitter
        </div>
        <div>
          <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/workout">Try as a guest</Link>
          </div>
        </div>
        <Footer />
      </div>
   
  );
}
