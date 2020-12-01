import styled from 'styled-components';
import Tile from "./Tile";
import tileDefaults from '../images/tileDefaults';
import { shuffle } from '../utils';

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

// dupplicate tiles and shuffle
const resetGrid = () => {
  return shuffle([
    ...Object.keys(tileDefaults),
    ...Object.keys(tileDefaults)
  ]).map(item => tileDefaults[item]);
}

const Grid = ({ setTiles, tiles }) => {
  if(tiles.length === 0) {
    setTiles(resetGrid());
    return(
      <div />
    )
  }

  return (
    <div>
      <StyledGrid>
        { tiles.map(tile => (
          <Tile tile={ tile } />
        )) }
      </StyledGrid>

      <ResetInput
        onClick={() => setTiles(resetGrid())}
        type="button"
        value="Réinitialiser"
      />
    </div>
  )
};

export default Grid;
