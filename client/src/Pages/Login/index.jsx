import React from "react";
import { SubmitButton } from "../../Components/SubmitButton";
import "./_login.scss"

export function Login() {
    return(
    <form>
        <h1>Login</h1>
        <div className="login">
        
            <img src="../../Assets/loginIcon.svg" alt="Login icon" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Password"/>
            <label>
                <input type="checkbox" />
                Remember me
            </label>
            <SubmitButton/>
            <div>
                <a href="http://localhost:3000/">Forgot password?</a>
                <a href="http://localhost:3000/">Don't have an account? Sign Up</a>
            </div>
        </div>
    </form>
    )
    
}