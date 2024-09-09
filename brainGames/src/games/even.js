import getRandomInt from '../getRandomInt.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const expression = getRandomInt(1, 100);
  const rigthAnswer = (expression % 2 === 0) ? 'yes' : 'no';

  return { rules, expression, rigthAnswer };
};
