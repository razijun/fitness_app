import React from "react";
import { SubmitButton } from "../../Components/SubmitButton";
import "./_login.scss";
import { AiFillLock } from "react-icons/ai";
import { Footer } from "../../Components/Footer";
import { Link } from "react-router-dom";


export function Login() {
  return (
    <form className="loginForm">
      <div className="login">
        <AiFillLock color="purple" size="30px" />
        <h2>Sign in</h2>
        <input className="textInput" type="text" placeholder="Email Address" />
        <input className="textInput" type="text" placeholder="Password" />
        <label>
          <input className="checkbox" type="checkbox" /> Remember me
        </label>
        <SubmitButton label="SIGN IN" />
        <div className="hrefContainer">
          <a href="http://localhost:3000/">Forgot password?</a>
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>
      <Footer />
    </form>
  );
}
