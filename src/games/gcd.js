import { getRandomNum } from '../utils.js';
import startGame from '../engine.js';

// Нахождение НОД
const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

export const exercise = 'Find the greatest common divisor of given numbers.';
const startPlay = () => {
  const a = getRandomNum(0, 50);
  const b = getRandomNum(0, 50);
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);
  return { question, correctAnswer };
};

export const playGameGcd = () => {
  startGame(exercise, startPlay);
};
