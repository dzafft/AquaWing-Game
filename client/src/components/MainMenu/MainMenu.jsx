import React, { useContext } from "react";
import "./MainMenu.css";
import MenuButton from "../../ui/MenuButton/MenuButton";
import StartButton from "../../assets/start_button.png";
import ScoreboardButton from "../../assets/scoreboard_button.png";
import LogoutButton from "../../assets/logout_button.png";
import LoginButton from "../../assets/login_button.png";
import AquaWingsLogo from "../../assets/aquawing_logo.png";
import { usersContextRef } from "../../contexts/usersContext";
import { useNavigate } from "react-router";

const MainMenu = ({ setOpenModal, setIsMuted }) => {
  const { currentUser, setCurrentUser } = useContext(usersContextRef);
  const navigate = useNavigate();

  const handleStart = () => {
    setIsMuted(false);
    if (!currentUser) {
      setOpenModal(true);
      return;
    }
    navigate("/start");
  };

  const handleScoreboard = () => {
    setIsMuted(false);
    if (!currentUser) {
      setOpenModal(true);
      return;
    }
    navigate("/scoreboard");
  };

  const handleLogout = () => {
    setIsMuted(false);
    setCurrentUser(null);
  };

  const handleLogin = () => setOpenModal(true);

  return (
    <div className="main-menu">
      <img draggable="false" src={AquaWingsLogo} alt="" />
      <MenuButton imageSrc={StartButton} onClick={handleStart}></MenuButton>
      <MenuButton
        imageSrc={ScoreboardButton}
        onClick={handleScoreboard}
      ></MenuButton>
      {currentUser ? (
        <MenuButton imageSrc={LogoutButton} onClick={handleLogout}></MenuButton>
      ) : (
        <MenuButton imageSrc={LoginButton} onClick={handleLogin}></MenuButton>
      )}
    </div>
  );
};

export default MainMenu;
