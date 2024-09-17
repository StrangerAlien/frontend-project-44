// import { gcd } from 'mathjs';
import getRandomInt from '../getRandomInt.js';

const rules = () => 'Find the greatest common divisor of given numbers.';

const isGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return isGcd(b, a % b);
};

const gcd = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);

  const expression = `${firstNum} ${secondNum}`;
  const rigthAnswer = isGcd(firstNum, secondNum);

  return { expression, rigthAnswer: String(rigthAnswer) };
};

export { gcd, rules };
