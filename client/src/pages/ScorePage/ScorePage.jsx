import React from "react";
import "./ScorePage.css";
import ScoreTable from "../../components/ScoreTable/ScoreTable";

const ScorePage = () => {
  return (
    <div className="scorepage-wrapper">
      <div className="table-wrapper">
        <ScoreTable></ScoreTable>
      </div>
    </div>
  );
};

export default ScorePage;
