import React from "react";
import { SubmitButton } from "../../Components/SubmitButton";
import "./_login.scss";
import { AiFillLock } from "react-icons/ai";
import { Copyright } from "../../Components/Copyright";


export function Login() {
    return(
    <form>
        <div className="login">
            <AiFillLock  color="purple" size="30px"/>
            <h2>Sign in</h2>
            <input className="textInput" type="text" placeholder="Email Address" />
            <input className="textInput" type="text" placeholder="Password"/>
            <label>
                <input className="checkbox" type="checkbox" /> Remember me
            </label>
            <SubmitButton label="Sign in"/>
            <div className="hrefContainer">
                <a href="http://localhost:3000/">Forgot password?</a>
                <a href="http://localhost:3000/">Don't have an account?   Sign Up</a>
            </div>
            
        </div>
        <Copyright/>
    </form>
    )
    
}