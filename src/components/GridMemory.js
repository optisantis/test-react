import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FULL_CASE_WIDTH,
  ROW_LENGHT,
  CASE_WIDTH,
  CARD_STATE,
} from "../constants";

const GridMemory = ({ handleCounter, stopChrono, startChrono, data, setData }) => {
  const [firstPicked, setFirstPicked] = useState(-1);
  const [secondPicked, setSecondPicked] = useState(-1);
  const [cardFound, setCardFound] = useState(0);

  const updateCase = (i) => {
    if (firstPicked === -1) {
      data[i].state = CARD_STATE.ACTIVE;
      setData([...data]);
      setFirstPicked(i);
    } else if (secondPicked === -1) {
      data[i].state = CARD_STATE.ACTIVE;
      setData([...data]);
      setSecondPicked(i);
    }
  };

  const handleClickOnCase = (i) => {
    startChrono();
    if (data[i].state !== CARD_STATE.IDLE) return;
    if (firstPicked !== -1 && secondPicked !== -1) {
      data[firstPicked].state = CARD_STATE.IDLE;
      data[secondPicked].state = CARD_STATE.IDLE;
      setFirstPicked(-1);
      setSecondPicked(-1);
    }
    updateCase(i);
    handleCounter();
  };

  useEffect(() => {
    if (firstPicked === -1 || secondPicked === -1) return;
    if (data[firstPicked].src === data[secondPicked].src) {
      data[firstPicked].state = CARD_STATE.FOUND;
      data[secondPicked].state = CARD_STATE.FOUND;
      setData([...data]);
      setCardFound(cardFound + 2);
      setFirstPicked(-1);
      setSecondPicked(-1);
    }
  }, [secondPicked]);

  useEffect(() => {
    console.log(cardFound);
    console.log(data.length);
    if (cardFound === data.length) {
      stopChrono();
    }
  }, [cardFound]);

  const renderCard = (e) => {
    switch (e.state) {
      case CARD_STATE.ACTIVE:
        return <img src={e.src} alt="" width="145px" height="145px" />;
      case CARD_STATE.FOUND:
        return <ImageFound src={e.src} alt="" width="145px" height="145px" />;
      default:
        return null;
    }
  };
  return (
    <Grid>
      {data.map((e, i) => (
        <Case onClick={() => handleClickOnCase(i)} key={i}>
          {renderCard(e)}
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

const ImageFound = styled.img`
  opacity: 0.5;
`;

export default GridMemory;
