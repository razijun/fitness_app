import React from "react";
import "./Nuv.scss";
import { AiOutlineHome } from "react-icons/ai";
import { BsFileRuled, BsPerson } from "react-icons/bs";
import { BiRun } from "react-icons/bi";

export function NuvBar() {
  return (
    <ul className="nuvBar">
      <li>
        <a href="###">
            FitLi
        </a>
      </li>
      <li>
        <a href="###">
          <AiOutlineHome />
          Home
        </a>
      </li>
      <li>
        <a href="###">
          <BiRun />
          Workouts
        </a>
      </li>
      <li>
        <a href="###">
          <BsFileRuled />
          Programs
        </a>
      </li>
      <li>
        <a href="###">
          <BsPerson />
          Profile
        </a>
      </li>
    </ul>
  );
}
