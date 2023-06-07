import React, { useState, useEffect } from "react";
import { Bird, Div, Gamebox, Obstacle, GameComponentContainer } from "./styles";

const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 3;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 50;
const OBSTACLE_GAP = 8 * BIRD_SIZE;

const Game = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(100);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
  const [score, setScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState([]);

  const bottomObstacleHeight = GAME_HEIGHT - (OBSTACLE_GAP + obstacleHeight);

  useEffect(() => {
    const storedScoreHistory = localStorage.getItem("scoreHistory");
    if (storedScoreHistory) {
      setScoreHistory(JSON.parse(storedScoreHistory));
    } else {
      console.log("Sorry");
    }
    console.log(storedScoreHistory);
  }, []);

  useEffect(() => {
    let timeId;
    if (hasGameStarted && BIRD_SIZE <= GAME_HEIGHT - birdPosition) {
      timeId = setInterval(() => {
        setBirdPosition((prev) => prev + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [hasGameStarted, birdPosition]);

  useEffect(() => {
    let obstacleId;

    if (hasGameStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((prev) => prev - 5);
      }, 24);
      return () => {
        clearInterval(obstacleId);
      };
    } else {
      const newObstacleHeight = Math.floor(
        Math.random() * (GAME_HEIGHT - OBSTACLE_GAP)
      );
      setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
      setObstacleHeight(newObstacleHeight);
      if (hasGameStarted) {
        setScore((prev) => prev + 1);
      }
    }
  }, [hasGameStarted, obstacleLeft]);

  const handleClick = (e) => {
    if (hasGameStarted === false) {
      e.stopPropagation();
      setHasGameStarted(true);
      setScore(0);
    }
    let newBirdPosition = birdPosition - JUMP_HEIGHT;
    if (newBirdPosition < 0) {
      newBirdPosition = 0;
    }

    setBirdPosition(newBirdPosition);
  };

  useEffect(() => {
    console.log("scoreHistory: " + scoreHistory);
  }, [scoreHistory]);

  useEffect(() => {
    const verticalTopCollision =
      birdPosition >= 0 && birdPosition <= obstacleHeight;
    const verticalBottomCollision =
      birdPosition + BIRD_SIZE >= GAME_HEIGHT - bottomObstacleHeight;

    if (
      obstacleLeft <= OBSTACLE_WIDTH &&
      (verticalTopCollision || verticalBottomCollision)
    ) {
      const storedHistory = localStorage.setItem(
        "scoreHistory",
        JSON.stringify([...scoreHistory, score])
      );
      console.log(storedHistory);
      setScoreHistory([...scoreHistory, score]);
      setHasGameStarted(false);
      setScore(0);
    }
  }, [birdPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft]);

  return (
    <Div onClick={handleClick}>
      <Gamebox height={GAME_HEIGHT} width={GAME_WIDTH}>
        <GameComponentContainer>
          <Obstacle
            top={0}
            width={OBSTACLE_WIDTH}
            height={obstacleHeight}
            left={obstacleLeft}
          />
          <Obstacle
            top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
            width={OBSTACLE_WIDTH}
            height={bottomObstacleHeight}
            left={obstacleLeft}
          />
          <Bird size={BIRD_SIZE} top={birdPosition} />
        </GameComponentContainer>
      </Gamebox>
      <span>{score}</span>
    </Div>
  );
};

export default Game;
