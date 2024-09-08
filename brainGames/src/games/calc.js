import getRandomInt from '../getRandomInt.js';

export default () => {
  const ruleS = 'What is the result of the expression?';

  const firstNum = getRandomInt(0, 10);
  const secondNum = getRandomInt(0, 10);

  const action = ['+', '-', '*'];
  const operation = action[getRandomInt(0, 3)];

  const expressioN = `${firstNum} ${operation} ${secondNum}`;

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
    expression: expressioN,
    rigthAnswer: String(rigthAnsweR),
  };
};
