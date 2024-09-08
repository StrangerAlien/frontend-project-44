import { gcd } from 'mathjs';
import getRandomInt from '../getRandomInt.js';

export default () => {
  const ruleS = 'Find the greatest common divisor of given numbers.';

  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);

  const exressioN = `${firstNum} ${secondNum}`;
  const rigthAnsweR = gcd(firstNum, secondNum);

  return {
    rules: ruleS,
    expression: exressioN,
    rigthAnswer: String(rigthAnsweR),
  };
};
