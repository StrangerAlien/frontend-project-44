// import { gcd } from 'mathjs';
import getRandomInt from '../getRandomInt.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);

  const expression = `${firstNum} ${secondNum}`;
  const rigthAnswer = gcd(firstNum, secondNum);

  return { rules, expression, rigthAnswer: String(rigthAnswer) };
};
