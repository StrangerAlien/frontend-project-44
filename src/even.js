import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);
  const round = 3;

  let i = 1;
  while (i <= round) {
    const expression = getRandomInt();
    console.log(`Question: ${expression}`);

    const answer = readlineSync.question();
    const rigthAnswer = (expression % 2 === 0) ? 'yes' : 'no';

    if (answer !== rigthAnswer) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return false;
    }

    if (answer === rigthAnswer) console.log('Correct!');

    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
