import { isPrime } from 'mathjs';
import getRandomInt from '../getRandomInt.js';

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
