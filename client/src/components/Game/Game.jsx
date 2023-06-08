import React, { useState, useEffect, useContext } from "react";
import jumpSound from "../../assets/jump.wav";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import {
  Bird,
  Div,
  Gamebox,
  Obstacle,
  GameComponentContainer,
  BirdImage,
} from "./styles";
import spriteFloating from "../../assets/sprite_float.png";
import spriteJumping from "../../assets/sprite_jump.png";
import { usersContextRef } from "../../contexts/usersContext";
const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 3;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 50;
const OBSTACLE_GAP = 8 * BIRD_SIZE;
const Game = ({ score, setScore, hasGameStarted, setHasGameStarted }) => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [obstacleHeight, setObstacleHeight] = useState(100);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
  const [scoreHistory, setScoreHistory] = useState([]);
  const [isJumping, setIsJumping] = useState(false);
  const { currentUser } = useContext(usersContextRef);
  const bottomObstacleHeight = GAME_HEIGHT - (OBSTACLE_GAP + obstacleHeight);
  const submitScore = async () => {
    try {
      const user = currentUser;
      if (user) {
        const response = await axios.post("http://localhost:8080/scores", {
          nickname: user.nickname,
          score: score,
        });
        if (response.data.success) {
          console.log("Score submitted successfully!");
        } else {
          console.error("Failed to submit score:", response.data.error);
        }
      }
    } catch (error) {
      console.error("Failed to submit score:", error);
    }
  };
  useEffect(() => {
    // Call the submitScore function whenever the score changes
    submitScore();
  }, [score, currentUser]);
  useEffect(() => {
    setScore(score);
  }, [score, setScore]);
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
  const handleSpaceBar = (event) => {
    if (event.code === "Space" || event.keyCode === 32) {
      event.preventDefault();
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 400);
      if (!hasGameStarted) {
        setHasGameStarted(true);
        setScore(0);
      }
      let newBirdPosition = birdPosition - JUMP_HEIGHT;
      if (newBirdPosition < 0) {
        newBirdPosition = 0;
      }
      setBirdPosition(newBirdPosition);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleSpaceBar);
    return () => {
      document.removeEventListener("keydown", handleSpaceBar);
    };
  }, []);
  const handleClick = (e) => {
    if (hasGameStarted === false) {
      e?.stopPropagation();
      setHasGameStarted(true);
      setScore(0);
    }
    let newBirdPosition = birdPosition - JUMP_HEIGHT;
    if (newBirdPosition < 0) {
      newBirdPosition = 0;
    }
    setIsJumping(true);
    const audio = new Audio(jumpSound);
    audio.play();
    setTimeout(() => {
      setIsJumping(false);
    }, 400);
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
          <Bird
            size={BIRD_SIZE}
            top={birdPosition}
            className={isJumping ? "jumping" : ""}
          >
            {" "}
            <BirdImage
              src={isJumping ? spriteJumping : spriteFloating}
              alt="Bird"
            />
          </Bird>
        </GameComponentContainer>
      </Gamebox>
    </Div>
  );
};
export default Game;
