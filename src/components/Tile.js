import styled from 'styled-components';
import tileDefaults from '../images/tileDefaults';
import { replaceAtIndex } from '../utils';

const Card = styled.img`
  object-fit: cover;
  background: ${props => props.state === 'idle' ? 'white' : 'red' };
  padding: 0.2em;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
  cursor: pointer;
`;


const Tile = ({ tile, setTiles, tiles, startGame, gameState }) => {
  const handleClick = () => {
    if(gameState === 'new') {
      startGame();
    }

    // Set tile active on click
    if(tile.state === 'idle') {
      const newTile = Object.assign({}, tile, { state: 'active' });
      const index = tiles.indexOf(tile);
      console.log(newTile);
      setTiles(replaceAtIndex(tiles, index, newTile));
    }
  }
  return (
    <Card src={ tile.image } state={ tile.state } onClick={ handleClick } />
  )
};

export default Tile;
