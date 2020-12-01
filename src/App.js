import styled from 'styled-components';
import { useState } from 'react';
import Grid from "./components/Grid";
import Header from "./components/Header"

const Instructions = styled.p`
  text-align: center;
`;

export default function Memory() {
  const [gameState, setGameState] = useState('new');
  const [tries, setTries] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [currentTiles, setCurrentTiles] = useState([]);

  const startGame = () => {
    setGameState('running');
    setTiles(tiles.map(tile => {
      tile.state = 'idle';
    }))
  }
  return (
    <main>
      <Header tries={ tries } />
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
          setCurrentTiles
        }}
      />
    </main>
  );
}
