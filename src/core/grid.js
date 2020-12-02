import _ from 'lodash';

const gridIsCompleted = (tiles) => {
  return tiles.filter(tile => tile.state === 'found').length === tiles.length;
}

// Checks current tiles and replace with new state
const replaceTilesState = (tiles, currentTiles, newState) => {
  if(_.isEmpty(tiles) || _.isEmpty(currentTiles) || _.isUndefined(newState)) {
    return tiles;
  }
  return tiles.map(tile => {
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
