import styled from 'styled-components';
import { useState, useEffect } from 'react';
import tileDefaults from './images/tileDefaults';
import { shuffle } from './utils';
import { replaceTilesState } from './core/grid';
import Grid from "./components/Grid";
import Header from "./components/Header"

const Instructions = styled.p`
  text-align: center;
`;

interface TileInterface {
  image: string,
  id: string,
  index: string,
  state: string
}

export default function Memory() {
  const [gameState, setGameState] = useState<string>('new');
  const [tries, setTries] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [timeout, setTo] = useState<number>();
  const [tiles, setTiles] = useState<Array<TileInterface>>([]);
  const [currentTiles, setCurrentTiles] = useState<Array<TileInterface>>([]);

  // dupplicate default tiles and shuffle
  const resetGrid = () => {
    return shuffle([
      ...Object.keys(tileDefaults),
      ...Object.keys(tileDefaults)
    ]).map((item: keyof typeof tileDefaults, index: number) => Object.assign(
      {}, tileDefaults[item], { item, index })
    );
  }

  const resetGame = (tiles: Array<Object>) => {
    setGameState('new');
    setTiles(resetGrid());
    setTries(0);
    clearTimeout(timeout);
    setTimer(0);
  }

  const startGame = () => {
    setGameState('running');
    startTimer();
  }

  const stopGame = () => {
    setGameState('finish');
    clearTimeout(timeout);
  }

  const startTimer = () => {
    setTimer(timer + 1);
  }

  useEffect(() => {
    if(gameState === 'running') {
      setTo(setTimeout(startTimer, 1000));
    }
  }, [timer]);

  // Check if tiles are identical
  useEffect(() => {
    if(currentTiles.length === 2) {
      const newState = currentTiles[0].id === currentTiles[1].id ? 'found' : 'idle';
      const timeoutMs = newState === 'found' ? 0 : 800;

      setTries(tries + 1);

      // Hide current tiles if not identical, else set to found
      setTimeout(function() {
        setCurrentTiles([]);
        setTiles(
          replaceTilesState(tiles, currentTiles, newState)
        );
      }, timeoutMs)
    }
  }, [currentTiles]);

  return (
    <main>
      <Header tries={ tries } timer={ timer } />
      <Instructions>
        Cliquez sur une carte pour commencer
      </Instructions>
      <Grid
        {...{
          gameState,
          setGameState,
          tries,
          setTries,
          tiles,
          setTiles,
          startGame,
          currentTiles,
          setCurrentTiles,
          resetGame,
          stopGame
        }}
      />
    </main>
  );
}
