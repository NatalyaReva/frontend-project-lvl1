import { getRandomNum } from '../utils.js';
import startGame from '../engine.js';

// Получение рандомной прогрессии в массиве

const getRandomArray = () => {
  const arr = [];
  let a = getRandomNum(0, 10);
  const b = getRandomNum(1, 10);
  for (let i = 1; i <= 10; i += 1) {
    arr.push(a);
    a += b;
  }
  return arr;
};
// console.log(getRandomArray()); //Выводится  рандомный массив из 10 чисел

// Получение случайного целого числа в заданном интервале
function getRandomInt(min, max) {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1)) + min1;
}

export const exercise = 'What number is missing in the progression?';

const startPlay = () => {
  const arr = getRandomArray();
  const index = getRandomInt(0, arr.length - 1);
  const closedNum = arr[index];
  arr[index] = '..';
  const question = arr.join(' ');
  const correctAnswer = closedNum.toString();
  return { question, correctAnswer };
};

export const playGameClosedNumInProgression = () => {
  startGame(exercise, startPlay);
};
