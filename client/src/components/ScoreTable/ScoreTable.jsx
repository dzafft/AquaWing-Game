import React from "react";
import "./ScoreTable.css";

const ScoreTable = () => {
  return (
    <ul className="scoreboard">
      <li>
        <span>1st</span>
        <span>KingJelly</span>
        <span className="score">49</span>
      </li>
      <li>
        <span>2nd</span>
        <span>FishEyez</span>
        <span className="score">42</span>
      </li>
      <li>
        <span>3rd</span>
        <span>Finns</span>
        <span className="score">37</span>
      </li>
      <li>
        <span>4th</span>
        <span>Spiker</span>
        <span className="score">34</span>
      </li>
      <li>
        <span>5th</span>
        <span>Nemo</span>
        <span className="score">26</span>
      </li>
    </ul>
  );
};

export default ScoreTable;
