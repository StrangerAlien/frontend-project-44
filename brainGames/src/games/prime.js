// import { isPrime } from 'mathjs';
import getRandomInt from '../getRandomInt.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default () => {
  const ruleS = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const expressioN = getRandomInt(1, 200);
  const rigthAnsweR = isPrime(expressioN) ? 'yes' : 'no';

  return {
    rules: ruleS,
    expression: String(expressioN),
    rigthAnswer: rigthAnsweR,
  };
};
