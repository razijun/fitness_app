import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Layout (){
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/homepage">HomePage</Link>
          </li>
          <li>
            <Link to="/start">Start Workout</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/workout">Workout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
