import getRandomInt from '../getRandomInt.js';

export default () => {
  const ruleS = 'Answer "yes" if the number is even, otherwise answer "no".';

  const exressioN = getRandomInt(1, 100);
  const rigthAnsweR = (exressioN % 2 === 0) ? 'yes' : 'no';

  return {
    rules: ruleS,
    expression: exressioN,
    rigthAnswer: rigthAnsweR,
  };
};
