import getRandomInt from '../getRandomInt.js';

export default () => {
  const ruleS = 'Answer "yes" if the number is even, otherwise answer "no".';

  const expressioN = getRandomInt(1, 100);
  const rigthAnsweR = (expressioN % 2 === 0) ? 'yes' : 'no';

  return {
    rules: ruleS,
    expression: expressioN,
    rigthAnswer: rigthAnsweR,
  };
};
