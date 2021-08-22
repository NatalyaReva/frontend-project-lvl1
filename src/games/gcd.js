import { getRandomNumber, getUserAnswer } from './even.js';

// Нахождение НОД
const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const questionNod = (nameUser) => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  for (i; i < 3; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const result = gcd(a, b);
    const numbers = `${a} ${b}`;
    console.log(`Question: ${numbers}`);
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

export default questionNod;
