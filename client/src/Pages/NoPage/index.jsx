import React from "react";
import { Link } from "react-router-dom";
import './noPage.scss'

export function NoPage(){
    return(
        <div className="noPage">
            <div className="number">404</div>
            <div className="bold">Hey there! the page you looking for not found.</div>
            <div className="text">
                The link you followed probably broken 
                or the page has been removed.
            </div>
            <Link to="/workout">
                Back to Workouts 
            </Link>
            
        </div>
    )
}