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

  test('similar tile in list', () => {
    expect(
      replaceTilesState([appleTile], [appleTile2], 'active')
    ).toMatchObject([
      appleTile
    ]);
  });
})
