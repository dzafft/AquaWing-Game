import React from "react";
import "./ScoreTable.css";

const ScoreTable = () => {
  return (
    <ul className="scoreboard">
      <li>
        <span>1st</span>
        <span>JellowKing</span>
        <span className="score">8</span>
      </li>
      <li>
        <span>2nd</span>
        <span>JellowKing</span>
        <span className="score">8</span>
      </li>
      <li>
        <span>3rd</span>
        <span>JellowKing</span>
        <span className="score">8</span>
      </li>
      <li>
        <span>4th</span>
        <span>JellowKing</span>
        <span className="score">8</span>
      </li>
      <li>
        <span>5th</span>
        <span>JellowKing</span>
        <span className="score">8</span>
      </li>
    </ul>
  );
};

export default ScoreTable;
