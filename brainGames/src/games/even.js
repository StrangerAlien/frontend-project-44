import getRandomInt from '../getRandomInt.js';

const isEven = (num) => (num % 2 === 0);

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const expression = getRandomInt(1, 100);
  const rigthAnswer = isEven(expression) ? 'yes' : 'no';

  return { rules, expression, rigthAnswer };
};
