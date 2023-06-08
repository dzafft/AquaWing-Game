import React, { useState, useContext } from "react";
import ModalComponent from "../../ui/ModalComponent/ModalComponent";
import "./HomePage.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import ReactAudioPlayer from "react-audio-player";
import music from "../../assets/aquawing_main.mp3";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AuthModal from "../../components/AuthModal/AuthModal";
import helpButton from "../../assets/help_button.png";
import { usersContextRef } from "../../contexts/usersContext";
import { useNavigate } from "react-router";
import Instructions from "../../components/Instructions/Instructions";

const HomePage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const { currentUser } = useContext(usersContextRef);

  const navigate = useNavigate();

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="homepage-wrapper">
      <div className="top-bar">
        <div className="left-corner">
          <button className="mute-button" alt="mute" onClick={handleMute}>
            {isMuted ? (
              <VolumeOffIcon fontSize="large" />
            ) : (
              <VolumeUpIcon fontSize="large" />
            )}
          </button>
        </div>
        <div className="right-corner">
          <button
            className="help-button"
            onClick={() => handleToggleInstructions()}
          >
            <img src={helpButton} style={{ width: "80px" }} alt="How to Play" />
          </button>
        </div>
      </div>
      <div className="menu-wrapper">
        <MainMenu setOpenModal={setOpenModal} setIsMuted={setIsMuted} />
      </div>
      <ReactAudioPlayer src={music} autoPlay loop={true} muted={isMuted} />
      <ModalComponent
        open={openModal}
        setOpen={setOpenModal}
        content={<AuthModal open={openModal} setOpen={setOpenModal} />}
      />
      <ModalComponent
        open={showInstructions}
        setOpen={setShowInstructions}
        content={<Instructions />}
      />
    </div>
  );
};

export default HomePage;
