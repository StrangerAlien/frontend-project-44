import getRandomInt from '../getRandomInt.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const firstNum = getRandomInt(0, 10);
  const secondNum = getRandomInt(0, 10);

  const action = ['+', '-', '*'];
  const operation = action[getRandomInt(0, 3)];

  const expression = `${firstNum} ${operation} ${secondNum}`;

  let rigthAnswer = NaN;

  switch (operation) {
    case '+':
      rigthAnswer = firstNum + secondNum;
      break;
    case '-':
      rigthAnswer = firstNum - secondNum;
      break;
    case '*':
      rigthAnswer = firstNum * secondNum;
      break;
    default:
      return NaN;
  }

  return { rules, expression, rigthAnswer: String(rigthAnswer) };
};
