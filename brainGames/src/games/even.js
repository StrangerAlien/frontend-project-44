import getRandomInt from '../getRandomInt.js';

const rules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const even = () => {
  const expression = getRandomInt(1, 100);
  const rigthAnswer = isEven(expression) ? 'yes' : 'no';

  return { expression, rigthAnswer };
};

export { rules, even };
