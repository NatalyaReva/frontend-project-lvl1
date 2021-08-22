import { getRandomNumber, getUserAnswer } from './even.js';

//  Рандомные операции с рандомными числами

export const randomExpression = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operation = ['+', '-', '*'];
  const indexOperation = Math.floor(Math.random() * operation.length);
  const expression = `${a} ${operation[indexOperation]} ${b}`;
  console.log(`Question: ${expression}`);
  let result;
  switch (indexOperation) {
    case 0:
      result = a + b;
      break;
    case 1:
      result = a - b;
      break;
    default:
      result = a * b;
  }
  return result;
};

const questionResultExpression = (nameUser) => {
  console.log('What is the result of the expression?');
  let i = 0;
  for (i; i < 3; i += 1) {
    const result = randomExpression();
    const answer = getUserAnswer();
    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
  }
  if (i > 2) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
export default questionResultExpression;
