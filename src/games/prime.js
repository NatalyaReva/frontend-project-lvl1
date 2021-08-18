import { getRandomNumber, getUserAnswer } from './even.js';

// Определяю является ли число простым
const getPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Вопрос-ответ с пользователем
const questionAnswer = (nameUser) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  for (i; i < 3; i += 1) {
    const result = getRandomNumber();
    console.log(`Question: ${result}`);
    const answer = getUserAnswer();
    if (answer === getPrime(result)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer was ${getPrime(result)}`);
      console.log(`Let's try  again, ${nameUser}`);
      break;
    }
  }
  if (i > 2) {
    console.log(`Congratulations, ${nameUser}`);
  }
};
export default questionAnswer;
