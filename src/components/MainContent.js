import React, { useEffect, useState } from "react";

import cardsList from "./CardsList";
import {
  StyledCard,
  StyledIcon,
  StyledMain,
  StyledGridContainer,
  StyledButton,
  StyledHeader,
  StyledNumbers
} from "../styles";

const MainContent = () => {
  const [cards, setCards] = useState([]);
  const [gameState, setGameState] = useState("new");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const startGame = () => {
    setGameState("running");
  };

  const resetGame = () => {
    setSeconds(0);
    setMinutes(0);
    setGameState("new");
  };

  const timerFormatter = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  const getCard = () => {
    if (cardsList !== null) {
      setCards(cardsList);
    }
  };

  useEffect(() => {
    getCard();
  }, []);

  useEffect(() => {
    let interval = null;
    if (gameState === "running") {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      if (seconds === 60) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      }
    } else if (gameState === "new" && (seconds !== 0 || minutes !== 0)) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameState, seconds, minutes]);

  return (
    <div>
      <StyledHeader>
        <div>Temps</div>
        <div>Nombre de coups</div>
      </StyledHeader>
      <StyledNumbers>
        <div>
          {timerFormatter(minutes)}:{timerFormatter(seconds)}
        </div>
        <div>0</div>
      </StyledNumbers>
      <StyledMain>
        Cliquez sur une carte pour commencer
        <StyledGridContainer>
          {cards.map((item) => (
            <StyledCard onClick={startGame} key={item.id}>
              <StyledIcon src={item.flipped ? item.backIcon : item.frontIcon} />
            </StyledCard>
          ))}
        </StyledGridContainer>
        <StyledButton onClick={resetGame}>Réinitialiser</StyledButton>
      </StyledMain>
    </div>
  );
};

export default MainContent;
