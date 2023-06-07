import styled from "styled-components";

export const Bird = styled.div`
  position: absolute;
  background-color: red;
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
  background-color: blue;
  overflow: hidden;
`;

export const Obstacle = styled.div`
  position: relative;
  background-color: green;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

export const GameComponentContainer = styled.div`
  position: relative;
  height: 100%;
`;
