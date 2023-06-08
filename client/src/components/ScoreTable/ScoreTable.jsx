import React from "react";
import "./ScoreTable.css";

const ScoreTable = () => {
  return (
    <ul className="scoreboard">
      <li>
        <span>1st</span>
        <span>KingJelly</span>
        <span className="score">95</span>
      </li>
      <li>
        <span>2nd</span>
        <span>FishEyez</span>
        <span className="score">88</span>
      </li>
      <li>
        <span>3rd</span>
        <span>Dietrich</span>
        <span className="score">72</span>
      </li>
      <li>
        <span>4th</span>
        <span>Yanay</span>
        <span className="score">61</span>
      </li>
      <li>
        <span>5th</span>
        <span>Mihai</span>
        <span className="score">54</span>
      </li>
    </ul>
  );
};

export default ScoreTable;
