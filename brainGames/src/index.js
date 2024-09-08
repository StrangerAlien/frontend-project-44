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

    const expressioN = params.expression;
    console.log(`Question: ${expressioN}`);

    const answer = readlineSync.question('Your answer: ');
    const rigthAnsweR = params.rigthAnswer;

    if (answer !== rigthAnsweR) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnsweR}'.
Let's try again, ${name}!`);
      return false;
    }

    if (answer === rigthAnsweR) console.log('Correct!');

    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
