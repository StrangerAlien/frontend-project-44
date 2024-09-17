// import { isPrime } from 'mathjs';
import getRandomInt from '../getRandomInt.js';

const rules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const prime = () => {
  const expression = getRandomInt(1, 200);
  const rigthAnswer = isPrime(expression) ? 'yes' : 'no';

  return { expression: String(expression), rigthAnswer };
};

export { rules, prime };
