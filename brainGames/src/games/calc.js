import getRandomInt from '../getRandomInt.js';

const rules = () => 'What is the result of the expression?';

const calcGame = () => {
  const firstNum = getRandomInt(0, 10);
  const secondNum = getRandomInt(0, 10);

  const action = ['+', '-', '*'];
  const operation = action[getRandomInt(0, 3)];

  const expression = `${firstNum} ${operation} ${secondNum}`;

  const getRigthAnswer = (operatioN, firstNuM, secondNuM) => {
    switch (operatioN) {
      case '+':
        return firstNuM + secondNuM;
      case '-':
        return firstNuM - secondNuM;
      case '*':
        return firstNuM * secondNuM;
      default:
        return NaN;
    }
  };

  const rigthAnswer = String(getRigthAnswer(operation, firstNum, secondNum));

  return { expression, rigthAnswer };
};

export { calcGame, rules };
