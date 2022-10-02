import React from "react";
import { SubmitButton } from "../../Components/SubmitButton";
import "./_signUp.scss";
import { AiFillLock } from "react-icons/ai";
import { Copyright } from "../../Components/Copyright";


export function SignUp() {
    return(
    <form>
        <div className="signUp">
            <AiFillLock  color="rgb(15, 98, 182)" size="30px"/>
            <h2>Sign up</h2>
                <input className="nameInput" type="text" placeholder="First Name" />
                <input className="nameInput" type="text" placeholder="Last Name" />
            <input className="textInput" type="text" placeholder="Email Address" />
            <input className="textInput" type="text" placeholder="Password"/>
            <label>
                <input className="checkbox" type="checkbox" />
                 <span>
                     I want to receive motivation,promotions and updates via email.
                 </span>    
            </label>
            <SubmitButton label="SIGN UP"/>
                <a href="http://localhost:3000/">Already have an account? Sign in</a>
        </div>
        <Copyright/>
    </form>
    )
    
}