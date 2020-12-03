import _ from 'lodash';
import TileInterface from '../components/TileInterface';


const gridIsCompleted = (tiles: Array<TileInterface>) => {
  return tiles.filter(tile => tile.state === 'found').length === tiles.length;
}

// Checks current tiles and replace with new state
const replaceTilesState = (
  tiles: Array<TileInterface>,
  currentTiles: Array<TileInterface>,
  newState: string
) => {
  if(_.isEmpty(tiles) || _.isEmpty(currentTiles) || _.isUndefined(newState)) {
    return tiles;
  }
  return tiles.map((tile: TileInterface) => {
    if(currentTiles.filter(currentTile => currentTile.index === tile.index).length > 0) {
      return Object.assign({}, tile, { state: newState })
    }
    return tile;
  })
}

export {
  gridIsCompleted,
  replaceTilesState
}
