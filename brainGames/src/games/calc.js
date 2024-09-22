import getRandomInt from '../getRandomInt.js';

const rules = () => 'What is the result of the expression?';

const getRigthAnswer = (operation, firstNum, secondNum) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return NaN;
  }
};

const calcGame = () => {
  const firstNum = getRandomInt(0, 10);
  const secondNum = getRandomInt(0, 10);
  const action = ['+', '-', '*'];
  const operation = action[getRandomInt(0, 3)];
  const expression = `${firstNum} ${operation} ${secondNum}`;

  const rigthAnswer = String(getRigthAnswer(operation, firstNum, secondNum));

  return { expression, rigthAnswer };
};

export { calcGame, rules };
