import _ from 'lodash';
import getRandomInt from '../getRandomInt.js';

const rules = () => 'What number is missing in the progression?';

const progression = () => {
  const start = getRandomInt(0, 50);
  const step = getRandomInt(2, 6);
  const length = getRandomInt(5, 10);
  const end = start + length * step;

  /* eslint-disable-next-line */
  let progression = _.range(start, end, step);
  const hiddenNum = getRandomInt(0, length - 1);
  const rigthAnswer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const expression = progression.join(' ');

  return { expression, rigthAnswer: String(rigthAnswer) };
};

export { progression, rules };
