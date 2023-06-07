import styled from "styled-components";
import gameBackground from "../../assets/game_background.jpg";
import coralPattern from "../../assets/coral_pattern.png";

export const Bird = styled.div`
  position: absolute;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  & span {
    color: white;
    font-size: 24px;
    position: absolute;
    top: 0;
  }
`;

export const Gamebox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-image: url(${gameBackground});
  background-size: contain;
  background-color: blue;
  overflow: hidden;
`;

export const Obstacle = styled.div`
  position: relative;
  background-image: url(${coralPattern});
  background-color: rgba(0, 0, 0, 0.5);
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

export const GameComponentContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const BirdImage = styled.img`
  width: 50px;
  height: auto;
`;
