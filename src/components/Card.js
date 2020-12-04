import React from "react";

import { StyledCard, StyledIcon } from "../styles";

const Card = (frontImg, backImg, flipped, onClick) => {
  const img = flipped ? frontImg : backImg;

  return (
    <StyledCard onClick={onClick}>
      <StyledIcon src={img} alt="" />
    </StyledCard>
  );
};

export default Card;
