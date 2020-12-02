import styled from 'styled-components';
import Tile from "./Tile";
import { shuffle } from '../utils';
import { gridIsCompleted } from '../core/grid';

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
  resetGame,
  stopGame
}) => {
  if(tiles.length === 0) {
    resetGame();
    return(
      <div />
    )
  }

  // Check if grid is completed
  if(gridIsCompleted(tiles)) {
    stopGame();
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
              setCurrentTiles,
              setTries,
              tries
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
