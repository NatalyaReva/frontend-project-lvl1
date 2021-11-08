import { getRandomNum } from '../utils.js';
import startGame from '../engine.js';

// Определяю является ли число простым
const getPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPlay = () => {
  const number = getRandomNum(0, 20);
  const question = number;
  const correctAnswer = getPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export const playGameIsPrime = () => {
  startGame(exercise, startPlay);
};
