import { shuffle } from '../utils';

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
