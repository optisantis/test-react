import styled from 'styled-components';
import { replaceTilesState } from '../core/grid';
import TileInterface from './TileInterface';

type CardProps = {
  state: string
}

const Card = styled.img`
  object-fit: cover;
  background: white;
  padding: 0.2em;
  height: 100%;
  width: 100%;
  border-radius: 0.5em;
  cursor: pointer;
  filter: brightness(${(props: CardProps) => {
    if(props.state === "idle") {
      return '100';
    }
    if(props.state === "found") {
      return '0.6';
    }
    if(props.state === "active") {
      return '1';
    }
  }});
  &:hover {
    transform: scale(1.02);
  }
`;



type TileProps = {
  tile: TileInterface,
  setTiles: any,
  tiles: Array<TileInterface>,
  startGame: any,
  gameState: string,
  currentTiles: Array<TileInterface>,
  setCurrentTiles: any,
  setTries: any,
  tries: number
}

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
}: TileProps) => {
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
        newTiles.find((currentTile: TileInterface) => currentTile.index === tile.index)
      ]);
    }
  }
  return (
    <Card src={ tile.image } state={ tile.state } onClick={ handleClick } />
  )
};

export default Tile;
