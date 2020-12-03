import { replaceTilesState } from '../core/grid';


describe('replaceTilesState', () => {
  const appleTile = {
    index: 1,
    id: 'apple',
    state: 'idle'
  }
  const appleTile2 = {
    index: 2,
    id: 'apple',
    state: 'idle'
  }
  const activeTile = {
    index: 3,
    id: 'banana',
    state: 'active'
  }
  const foundTile = {
    index: 4,
    id: 'avocado',
    state: 'active'
  }

  test('empty tiles', () => {
    expect(
      replaceTilesState([], [], '')
    ).toMatchObject([]);
  });

  test('tile not in list', () => {
    expect(
      replaceTilesState([appleTile], [activeTile], 'active')
    ).toMatchObject([appleTile]);
  });

  test('tile in list', () => {
    expect(
      replaceTilesState([appleTile], [appleTile], 'active')
    ).toMatchObject([
      Object.assign({}, appleTile, { state: 'active' })
    ]);
  });

  test('multiple tiles in list', () => {
    expect(
      replaceTilesState([appleTile, appleTile2], [appleTile, appleTile2], 'active')
    ).toMatchObject([
      Object.assign({}, appleTile, { state: 'active' }),
      Object.assign({}, appleTile2, { state: 'active' })
    ]);
  });

  test('similar tile in list', () => {
    expect(
      replaceTilesState([appleTile], [appleTile2], 'active')
    ).toMatchObject([
      appleTile
    ]);
  });

  test('mixed similar tiles in list', () => {
    expect(
      replaceTilesState([appleTile, foundTile, activeTile, appleTile2], [appleTile, appleTile2], 'active')
    ).toMatchObject([
      Object.assign({}, appleTile, { state: 'active' }),
      foundTile,
      activeTile,
      Object.assign({}, appleTile2, { state: 'active' })
    ]);
  });

})
