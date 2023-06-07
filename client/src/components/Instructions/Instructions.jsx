import React from "react";
import instructionsImage from "../../assets/instructions.png";
import { InstructionsWrapper, Image } from "./styles";

const Instructions = () => {
  return (
    <InstructionsWrapper>
      <Image src={instructionsImage} alt="Instructions" />
    </InstructionsWrapper>
  );
};

export default Instructions;
