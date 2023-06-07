import React from "react";
import Game from "../../components/Game/Game";
import { PageWrapper, GameWrapper } from "./styles";

const GamePage = () => {
  return (
    <PageWrapper>
      <GameWrapper>
        <Game />
      </GameWrapper>
    </PageWrapper>
  );
};

export default GamePage;
