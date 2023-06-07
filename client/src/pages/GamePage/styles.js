import styled from "styled-components";
import emblem from "../../assets/emblem.png";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

export const GameWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScoreWrapper = styled.div`
  position: absolute;
  top: 120px;
  right: 50%;
  transform: translateY(-50%) translateX(50%);
  font-size: 4rem;
  color: white;
  padding: 5rem;
  background-image: url(${emblem});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MessageWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: white;
  display: ${({ hasGameStarted }) => (hasGameStarted ? "none" : "block")};
`;

export const BackButton = styled.button`
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
