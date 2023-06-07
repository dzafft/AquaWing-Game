import { useState } from "react";
import Game from "../../components/Game/Game";
import {
  PageWrapper,
  GameWrapper,
  ScoreWrapper,
  MessageWrapper,
} from "./styles";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  return (
    <>
      <PageWrapper>
        <GameWrapper>
          <Game
            setScore={setScore}
            score={score}
            hasGameStarted={hasGameStarted}
            setHasGameStarted={setHasGameStarted}
          />
        </GameWrapper>
        <MessageWrapper hasGameStarted={hasGameStarted}>
          Press spacebar or mouse click to start
        </MessageWrapper>
      </PageWrapper>
      <ScoreWrapper>
        <span>{score}</span>
      </ScoreWrapper>
    </>
  );
};

export default GamePage;
