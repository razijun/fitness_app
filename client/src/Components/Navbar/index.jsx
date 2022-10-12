import React from "react";
import "./navbar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { BsFileRuled, BsPerson } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { Outlet, Link } from "react-router-dom";

export function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Auto Coach</Link>
      </li>
      <li>
        <Link to="/">
          <AiOutlineHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="/workout">
          <BiRun />
          Workout
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <BsPerson />
          Profile
        </Link>
      </li>
      <li>
        <Link to="/">Log Out</Link>
      </li>
    </ul>
  );
}
