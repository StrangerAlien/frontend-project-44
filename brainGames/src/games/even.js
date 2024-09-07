export default () => {
  const ruleS = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

  const exressioN = getRandomInt();
  const rigthAnsweR = (exressioN % 2 === 0) ? 'yes' : 'no';

  return {
    rules: ruleS,
    expression: exressioN,
    rigthAnswer: rigthAnsweR,
  };
};
