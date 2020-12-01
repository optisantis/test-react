import styled from 'styled-components';
import Tile from "./Tile";
import { shuffle, replaceAtIndex } from '../utils';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 10em);

  width: 40em;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  margin-bottom: 2em;
`;

const ResetInput = styled.input`
  margin: auto;
  display: block;
  background: rgb(9, 211, 172);
  padding: 0.5em;
  border-radius: 0.2em;
  appearance: none;
  color: rgb(41, 45, 62);
  border: none;
  cursor: pointer;
`;



const Grid = ({
  setTiles,
  tiles,
  tries,
  setTries,
  gameState,
  setGameState,
  startGame,
  currentTiles,
  setCurrentTiles,
  resetGame
}) => {
  if(tiles.length === 0) {
    resetGame();
    return(
      <div />
    )
  }

  // Check current tiles
  if(currentTiles.length === 2) {
    const newState = currentTiles[0].id === currentTiles[1].id ? 'found' : 'idle';

    setTries(tries + 1);

    // clear current tiles
    setCurrentTiles([]);

    const timeout = newState === 'idle' ? 800 : 0;

    // Hide current tiles if not identical, else set to found
    setTimeout(function() {
      setTiles(
        replaceAtIndex(
          replaceAtIndex(
            tiles,
            tiles.indexOf(currentTiles[1]),
            Object.assign({}, currentTiles[1], { state: newState })
          ),
          tiles.indexOf(currentTiles[0]),
          Object.assign({}, currentTiles[0], { state: newState })
        )
      )
    }, timeout);
  }

  return (
    <div>
      <StyledGrid>
        { tiles.map(tile => (
          <Tile
            tile={ tile }
            {...{
              tile,
              setTiles,
              tiles,
              startGame,
              gameState,
              currentTiles,
              setCurrentTiles
            }}
          />
        )) }
      </StyledGrid>

      <ResetInput
        onClick={ resetGame }
        type="button"
        value="Réinitialiser"
      />
    </div>
  )
};

export default Grid;
