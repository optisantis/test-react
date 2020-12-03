import _ from 'lodash';

const shuffle = (a: Array<any>) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const formatTimer = (timer: number) => {

  const hours   = Math.floor(timer / 3600);
  const minutes = Math.floor((timer - (hours * 3600)) / 60);
  const seconds = timer - (hours * 3600) - (minutes * 60);

  return `${ minutes < 10 ? "0" + minutes : minutes }:${ seconds < 10 ? "0" + seconds : seconds }`;
}

export {
  shuffle,
  formatTimer
}
