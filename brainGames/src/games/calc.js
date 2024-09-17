import getRandomInt from '../getRandomInt.js';

const rules = () => 'What is the result of the expression?';

const calcGame = () => {
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

  return { expression, rigthAnswer: String(rigthAnswer) };
};

export { calcGame, rules };
