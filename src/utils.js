import _ from 'lodash';

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const replaceAtIndex = (array, index, item) => {

  if(_.isUndefined(item) || _.isUndefined(index) || _.isEmpty(array) || index < 0) {
    return array;
  }

  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1, array.length)
  ]
}

export {
  shuffle,
  replaceAtIndex
}
