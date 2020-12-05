import React from "react";
import styled from "styled-components"
import {colors} from "../styles"

const TopDiv = styled.div
`
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    width: 100%;
    max-width: 750px;
    p {
        margin: 0;
    }
`;
const SmallWhite = styled.p`
    font-size: 16px;
    color: ${colors.starkSatin};
`;

const Header = () => {
  return (
    <TopDiv>
      <div>
        <SmallWhite>Temps</SmallWhite>
        <p>00:00</p>
      </div>
      <div>
        <SmallWhite>Nombres de coups</SmallWhite>
        <p>0</p>
      </div>
    </TopDiv>
  );
};

export default Header;
