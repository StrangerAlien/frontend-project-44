import _ from 'lodash';
import getRandomInt from '../getRandomInt.js';

const rules = () => 'What number is missing in the progression?';

const getParams = () => {
  const start = getRandomInt(0, 50);
  const step = getRandomInt(2, 6);
  const length = getRandomInt(5, 10);
  const end = start + length * step;

  return {
    start, end, step, length,
  };
};

const progressionGame = () => {
  const params = getParams();

  const progression = _.range(params.start, params.end, params.step);
  const hiddenNum = getRandomInt(0, params.length - 1);
  const rigthAnswer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const expression = progression.join(' ');

  return { expression, rigthAnswer: String(rigthAnswer) };
};

export { progressionGame, rules };
