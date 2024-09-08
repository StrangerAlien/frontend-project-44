import _ from 'lodash';
import getRandomInt from '../getRandomInt.js';

export default () => {
  const ruleS = 'What number is missing in the progression?';

  const start = getRandomInt(0, 50);
  const step = getRandomInt(2, 6);
  const length = getRandomInt(5, 10);
  const end = start + length * step;

  /* eslint-disable-next-line */
  let progression = _.range(start, end, step);
  const hiddenNum = getRandomInt(0, length - 1);
  const rigthAnsweR = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const expressioN = progression.join(' ');

  return {
    rules: ruleS,
    expression: expressioN,
    rigthAnswer: String(rigthAnsweR),
  };
};
