import React from "react";
import { SubmitButton } from "../../Components/SubmitButton";
import "./_signUp.scss";
import { AiFillLock } from "react-icons/ai";
import { Footer } from "../../Components/Footer";
import { Link } from "react-router-dom";


export function SignUp() {
  return (
    <form className="signUpForm">
      <div className="signUp">
        <AiFillLock color="rgb(222, 70, 19)"  size="30px" />
        <div className="signUpHeader">Sign up</div>
        <input className="nameInput" type="text" placeholder="First Name" />
        <input className="nameInput" type="text" placeholder="Last Name" />
        <input className="textInput" type="text" placeholder="Email Address" />
        <input className="textInput" type="text" placeholder="Password" />
        <label>
          <input className="checkbox" type="checkbox" />
          <span>
            I want to receive motivation,promotions and updates via email.
          </span>
        </label>
        <SubmitButton label="SIGN UP" />
        <Link to="/login">Already have an account? Sign in</Link>
      </div>
      <Footer />
    </form>
  );
}
