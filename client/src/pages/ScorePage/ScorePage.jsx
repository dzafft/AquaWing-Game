import React from "react";
import "./ScorePage.css";
import ScoreTable from "../../components/ScoreTable/ScoreTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ScorePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="scorepage-wrapper">
      <BackButton onClick={handleBack}>
        <ArrowBackIcon fontSize="large" />
      </BackButton>
      <div className="table-wrapper">
        <ScoreTable></ScoreTable>
      </div>
    </div>
  );
};

export default ScorePage;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;
