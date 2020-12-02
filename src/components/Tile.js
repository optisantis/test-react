import styled from 'styled-components';
import tileDefaults from '../images/tileDefaults';
import { replaceTilesState } from '../core/grid';

const Card = styled.img`
  object-fit: cover;
  background: white;
  padding: 0.2em;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
  cursor: pointer;
  filter: brightness(${props => props.brightness || 1});
  &:hover {
    transform: scale(1.02);
  }
`;


const Tile = ({
  tile,
  setTiles,
  tiles,
  startGame,
  gameState,
  currentTiles,
  setCurrentTiles,
  setTries,
  tries
}) => {
  const handleClick = () => {
    if(gameState === 'new') {
      startGame();
    }

    // Set tile active on click
    if(tile.state === 'idle' && currentTiles.length < 2) {
      const newTiles = replaceTilesState(tiles, [tile], 'active')
      setTiles(newTiles);

      setCurrentTiles([
        ...currentTiles,
        newTiles.find(currentTile => currentTile.index === tile.index)
      ]);
    }
  }
  const brightness = {
    found: 0.8,
    active: 1,
    idle: 100
  }
  return (
    <Card src={ tile.image } brightness={ brightness[tile.state] } state={ tile.state } onClick={ handleClick } />
  )
};

export default Tile;
