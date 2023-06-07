import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Game from "../../components/Game/Game";
import {
  PageWrapper,
  GameWrapper,
  ScoreWrapper,
  MessageWrapper,
  BackButton,
  MuteButton,
  VolumeOffIcon,
  VolumeUpIcon,
} from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import aquawingStart from "../../assets/aquawing_start.mp3";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

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
      <BackButton onClick={handleBack}>
        <ArrowBackIcon fontSize="large" />
      </BackButton>
      <MuteButton onClick={handleMute}>
        {isMuted ? (
          <VolumeOffIcon fontSize="large" />
        ) : (
          <VolumeUpIcon fontSize="large" />
        )}
      </MuteButton>
      {hasGameStarted && (
        <ReactAudioPlayer src={aquawingStart} autoPlay muted={isMuted} />
      )}
    </>
  );
};

export default GamePage;
