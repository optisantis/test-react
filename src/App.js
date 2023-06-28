// import styled from 'styled-components';
/* eslint-disable no-eval */
import React from 'react';
import {
  GAME_STATE_NEW,
  GAME_STATE_RUNNING,
  GAME_STATE_FINISHED,
  CARD_STATE_IDLE,
  CARD_STATE_ACTIVE,
  CARD_STATE_FOUND,
  FRUIT_APPLE,
  FRUIT_AVOCADO,
  FRUIT_BANANA,
  FRUIT_CORN,
  FRUIT_LEMON,
  FRUIT_LETTUCE,
  FRUIT_ONION,
  FRUIT_STRAWBERRY,
  TIME_CARD_ACTIVE
} from './constants'
import './App.scss';

export default function Memory() {
  const [gameState, setGameState] = React.useState(GAME_STATE_NEW);

  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  const [cardsShowed, setCardsShowed] = React.useState(0);
  const [hitsNumber, setHitsNumber] = React.useState(0);

  /* eslint-disable no-unused-vars */
  const [caseA1State, setCaseA1State] = React.useState({ name: 'A1', state: CARD_STATE_IDLE, value: FRUIT_LETTUCE });
  const [caseA2State, setCaseA2State] = React.useState({ name: 'A2', state: CARD_STATE_IDLE, value: FRUIT_ONION });
  const [caseA3State, setCaseA3State] = React.useState({ name: 'A3', state: CARD_STATE_IDLE, value: FRUIT_AVOCADO });
  const [caseA4State, setCaseA4State] = React.useState({ name: 'A4', state: CARD_STATE_IDLE, value: FRUIT_LEMON });

  const [caseB1State, setCaseB1State] = React.useState({ name: 'B1', state: CARD_STATE_IDLE, value: FRUIT_LETTUCE });
  const [caseB2State, setCaseB2State] = React.useState({ name: 'B2', state: CARD_STATE_IDLE, value: FRUIT_ONION });
  const [caseB3State, setCaseB3State] = React.useState({ name: 'B3', state: CARD_STATE_IDLE, value: FRUIT_APPLE });
  const [caseB4State, setCaseB4State] = React.useState({ name: 'B4', state: CARD_STATE_IDLE, value: FRUIT_LEMON });

  const [caseC1State, setCaseC1State] = React.useState({ name: 'C1', state: CARD_STATE_IDLE, value: FRUIT_STRAWBERRY });
  const [caseC2State, setCaseC2State] = React.useState({ name: 'C2', state: CARD_STATE_IDLE, value: FRUIT_BANANA });
  const [caseC3State, setCaseC3State] = React.useState({ name: 'C3', state: CARD_STATE_IDLE, value: FRUIT_STRAWBERRY });
  const [caseC4State, setCaseC4State] = React.useState({ name: 'C4', state: CARD_STATE_IDLE, value: FRUIT_CORN });

  const [caseD1State, setCaseD1State] = React.useState({ name: 'D1', state: CARD_STATE_IDLE, value: FRUIT_CORN });
  const [caseD2State, setCaseD2State] = React.useState({ name: 'D2', state: CARD_STATE_IDLE, value: FRUIT_BANANA });
  const [caseD3State, setCaseD3State] = React.useState({ name: 'D3', state: CARD_STATE_IDLE, value: FRUIT_APPLE });
  const [caseD4State, setCaseD4State] = React.useState({ name: 'D4', state: CARD_STATE_IDLE, value: FRUIT_AVOCADO });
  /* eslint-enable no-unused-vars */

  const allCases = [
    caseA1State,
    caseA2State,
    caseA3State,
    caseA4State,
    caseB1State,
    caseB2State,
    caseB3State,
    caseB4State,
    caseC1State,
    caseC2State,
    caseC3State,
    caseC4State,
    caseD1State,
    caseD2State,
    caseD3State,
    caseD4State
  ];

  // increment second each second
  React.useEffect(() => {
    if (gameState === GAME_STATE_RUNNING) {
      const interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 59) {
            return 0;
          } else {
            return seconds + 1;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  // increment minutes each minute
  React.useEffect(() => {
    if (gameState === GAME_STATE_RUNNING) {
      const minutesInterval = setInterval(() => {
        setMinutes(minutes => minutes + 1);
      }, 60000);
      return () => clearInterval(minutesInterval);
    }
  }, [gameState]);

  // set game status finished if all pairs found
  React.useEffect(() => {
    let gameFinished = true;
    allCases.forEach(oneCase => {
      if (oneCase.state !== CARD_STATE_FOUND) {
        gameFinished = false;
      }
    });

    gameFinished && setGameState(GAME_STATE_FINISHED);
  }, allCases); // eslint-disable-line react-hooks/exhaustive-deps

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHitsNumber(0);
    setGameState(GAME_STATE_NEW);

    // map all cases to set card state idle
    // ex. setCaseA1State({...caseA1State, state: CARD_STATE_IDLE});
    allCases.forEach(oneCase => {
      eval(`setCase${oneCase.name}State`)({ ...eval(`case${oneCase.name}State`), state: CARD_STATE_IDLE})
    });
  }


  const memoryTableStatusClassname = (status) => {
    switch (status.state) {
      case CARD_STATE_IDLE:
        return 'memoryTableItemIdle';
      case CARD_STATE_ACTIVE:
        return 'memoryTableItemActive';
      case CARD_STATE_FOUND:
        return 'memoryTableItemFound';
      default:
        return 'memoryTableItemIdle';
    }
  }

  const displayCard = (setCaseState, caseState) => {
    if (gameState === GAME_STATE_NEW) {
      setGameState(GAME_STATE_RUNNING);
    }

    setCaseState({...caseState, state: CARD_STATE_ACTIVE});

    if (cardsShowed + 1 < 2) {
      setCardsShowed(cardsShowed + 1);

    } else {
      setCardsShowed(0);
      setHitsNumber(hitsNumber + 1);

      let pairFound = false

      // map all cases to set card state found if pairs
      allCases.forEach(oneCase => {
        const oneCaseState = eval(`case${oneCase.name}State`);
        const setOneCaseState = eval(`setCase${oneCase.name}State`);

        // if other card active and not the actual one
        if (oneCaseState.state === CARD_STATE_ACTIVE && oneCaseState.name !== caseState.name) {
          // if values match, set status to found for the two cards
          if (oneCaseState.value === caseState.value) {
            setTimeout(() => {  setOneCaseState({...oneCaseState, state: CARD_STATE_FOUND}); }, TIME_CARD_ACTIVE);
            setTimeout(() => {  setCaseState({...caseState, state: CARD_STATE_FOUND}); }, TIME_CARD_ACTIVE);
            pairFound = true;
          } else {
            // else, set card to idle
            setTimeout(() => {  setOneCaseState({...oneCaseState, state: CARD_STATE_IDLE}); }, TIME_CARD_ACTIVE);
          }
        }
      });

      // if no pair found, set actual card to idle
      !pairFound && setTimeout(() => {  setCaseState({...caseState, state: CARD_STATE_IDLE}) }, TIME_CARD_ACTIVE);
    }
  }

  return (
    <main>
      <div className="header">
        <div className="headerInfos">
          <div className="headerInfosTime">
            <h2 className="headerInfosTimeTitle">
              Temps
            </h2>
            <p className="headerInfosTimeClock">
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </p>
          </div>
          <div className="headerInfosHits">
            <h2 className="headerInfosHitsTitle">
              Nombre de coups
            </h2>
            <p className="headerInfosHitsNumber">
              {hitsNumber}
            </p>
          </div>
        </div>
        <p className="headerInstructions">
          Cliquez sur une carte pour commencer
        </p>
      </div>
      <div className="memoryTable">
        {allCases.map(oneCase => {
          const oneCaseState = eval(`case${oneCase.name}State`);
          const setOneCaseState = eval(`setCase${oneCase.name}State`);

          // bind all cases
          return (
            <button
              key={oneCaseState.name}
              disabled={oneCaseState.state === CARD_STATE_FOUND}
              className={`memoryTableItem ${memoryTableStatusClassname(oneCaseState)}`}
              onClick={() => displayCard(setOneCaseState, oneCaseState)}
            >
              <img src={`${oneCaseState.value}.png`} alt={oneCaseState.value} />
            </button>
          )
        })}
      </div>
      <button className="resetButton" onClick={() => reset()}>Réinitialiser</button>
    </main>
  );
}
