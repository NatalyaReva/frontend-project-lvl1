import { getRandomNum } from '../utils.js';
import startGame from '../engine.js';

// Определение четное или нечетное число
const evenOrOdd = (num) => num % 2 === 0;

// Задание
export const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

const startPlay = () => {
  const num = getRandomNum(1, 20);
  const correctAnswer = evenOrOdd(num) ? 'yes' : 'no';
  const question = num.toString();
  return { question, correctAnswer };
};
export const playGameEven = () => {
  startGame(exercise, startPlay);
};
