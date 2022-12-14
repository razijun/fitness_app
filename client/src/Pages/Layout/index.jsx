import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Layout (){
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/workout/start">workout page</Link>
          </li>
          <li>
            <Link to="/workout/select">workouts</Link>
          </li>
          <li>
            <Link to="/homepage">HomePage</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/popup">popup</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
