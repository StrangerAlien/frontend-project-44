export default () => {
  const ruleS = 'What is the result of the expression?';

  const getRandomInt = (min = 0, max = 10) => Math.floor(Math.random() * (max - min) + min);

  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const action = ['+', '-', '*'];
  const operation = action[getRandomInt(0, 3)];

  const exressioN = `${firstNum} ${operation} ${secondNum}`;

  let rigthAnsweR = NaN;

  switch (operation) {
    case '+':
      rigthAnsweR = firstNum + secondNum;
      break;
    case '-':
      rigthAnsweR = firstNum - secondNum;
      break;
    case '*':
      rigthAnsweR = firstNum * secondNum;
      break;
    default:
      return NaN;
  }

  return {
    rules: ruleS,
    expression: exressioN,
    rigthAnswer: String(rigthAnsweR),
  };
};
