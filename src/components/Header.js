import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles";
import { CHRONO_STATE } from "../constants";

const Header = ({ counter, chronoState }) => {
  const [secondes, setSecondes] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const checkZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  useEffect(() => {
    let interval;
    if (chronoState === CHRONO_STATE.RUNNING) {
      interval = setInterval(() => {
        if (secondes > 59) {
          setSecondes(0);
          setMinutes(minutes + 1);
        } else {
          setSecondes((seconds) => seconds + 1);
        }
      }, 1000);
    }
    if(chronoState === CHRONO_STATE.NOT_LAUNCHED){
      setSecondes(0);
      setMinutes(0);
    }
    return () => clearInterval(interval);
  }, [chronoState]);


  return (
    <TopDiv>
      <div>
        <SmallWhite>Temps</SmallWhite>
        <p>
          {checkZero(minutes)}:{checkZero(secondes)}
        </p>
      </div>
      <div>
        <SmallWhite>Nombres de coups</SmallWhite>
        <p>{counter}</p>
      </div>
    </TopDiv>
  );
};

const TopDiv = styled.div`
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

export default Header;
