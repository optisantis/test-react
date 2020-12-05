import React from "react";
import Apple from "../images/apple.png";
import Avocado from "../images/avocado.png";
import Banana from "../images/banana.png";
import Corn from "../images/corn.png";
import Lemon from "../images/lemon.png";
import Lettuce from "../images/lettuce.png";
import Onion from "../images/onion.png";
import Strawberry from "../images/strawberry.png";
import styled from "styled-components";

const MOCKUP_GRID = [
  { src: Lettuce },
  { src: Onion },
  { src: Avocado },
  { src: Lemon },
  { src: Lettuce },
  { src: Onion },
  { src: Apple },
  { src: Lemon },
  { src: Strawberry },
  { src: Banana },
  { src: Strawberry },
  { src: Corn },
  { src: Corn },
  { src: Banana },
  { src: Apple },
  { src: Avocado },
];
const CASE_WIDTH = 155;
const ROW_LENGHT = 4;
const CASE_MARGIN = 10;
const FULL_CASE_WIDTH = `${CASE_MARGIN + CASE_WIDTH}px`;



const GridMemory = () => {
  return (
    <Grid>
      {MOCKUP_GRID.map((e) => (
        <Case src={e}>
          <img src={e.src} alt="" width="145px" height="145px" />
        </Case>
      ))}
    </Grid>
  );
};


const Case = styled.div`
  width: ${CASE_WIDTH}px;
  height: ${CASE_WIDTH}px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Grid = styled.div`
  display: flex;
  width: calc(${FULL_CASE_WIDTH} * ${ROW_LENGHT});
  height: calc(${FULL_CASE_WIDTH} * ${ROW_LENGHT});
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;


export default GridMemory;
