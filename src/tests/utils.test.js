import { shuffle, replaceAtIndex } from '../utils';

describe('shuffle', () => {
  test('shuffle empty array', () => {
    expect(shuffle([])).toMatchObject([]);
  });


  test('shuffle array with 1 element', () => {
    expect(shuffle([1])).toMatchObject([1]);
  });

  test('shuffle array', () => {
    const array = [1, 2, 3, 4];
    const shuffledArray = shuffle(array)

    expect(shuffledArray.length).toBe(array.length);

    // Every item is still in new array
    array.forEach(item => {
      expect(shuffledArray.indexOf(item)).not.toBe(-1);
    })
  });
});

describe('replaceAtIndex', () => {
  test('replace in empty array', () => {
    expect(replaceAtIndex([], 0, "")).toMatchObject([]);
  });

  test('replace first item', () => {
    expect(replaceAtIndex([1, 2, 3], 0, 5)).toMatchObject([5, 2, 3]);
  });

  test('replace last item', () => {
    expect(replaceAtIndex([1, 2, 3], 2, 5)).toMatchObject([1, 2, 5]);
  });

  test('replace at negative index', () => {
    expect(replaceAtIndex([1, 2, 3], -1, 5)).toMatchObject([1, 2, 3]);
  });

  test('replace out of bound item', () => {
    expect(replaceAtIndex([1, 2, 3], 10, 5)).toMatchObject([1, 2, 3, 5]);
  });
});
