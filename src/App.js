import Header from "./components/Header";
import GridMemory from "./components/GridMemory";
import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import { CHRONO_STATE, MOCKUP_GRID } from "./constants";

export default function Memory() {
  const [counter, setCounter] = useState(0);
  const [chronoState, setChronoState] = useState(CHRONO_STATE.NOT_LAUNCHED);
  const [data, setData] = useState(null);

  useEffect(() => {
    shuffleCard();
  }, []);

  const shuffleCard = () => {
  
    let shuffledList = MOCKUP_GRID.map(a => ({...a}));
    shuffledList = shuffledList.sort(() => Math.random() - 0.5);
    setData(shuffledList);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const stopChrono = () => {
    setChronoState(CHRONO_STATE.STOP);
  };

  const startChrono = () => {
    setChronoState(CHRONO_STATE.RUNNING);
  };

  const resetAll = () => {
    setCounter(0);
    shuffleCard();
    setChronoState(CHRONO_STATE.NOT_LAUNCHED);
  };

  return (
    <main>
      <Header counter={counter} chronoState={chronoState} />
      <p>Cliquez sur une carte pour commencer</p>
      {data && (
        <GridMemory
          handleCounter={handleCounter}
          stopChrono={stopChrono}
          startChrono={startChrono}
          data={data}
          setData={setData}
        />
      )}
      <Button title="Réinitialiser" onClick={() => resetAll()} />
    </main>
  );
}
