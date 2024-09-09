import readlineSync from 'readline-sync';

export default (brainGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(brainGame().rules);

  const round = 3;

  let i = 1;
  while (i <= round) {
    const params = brainGame();
    console.log(`Question: ${params.expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== params.rigthAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${params.rigthAnswer}'.
Let's try again, ${name}!`);
      return false;
    }

    if (answer === params.rigthAnswer) console.log('Correct!');

    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
