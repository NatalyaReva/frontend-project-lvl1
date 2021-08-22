import { getRandomNumber, getUserAnswer } from './even.js';

// Получение рандомноq прогрессии в массиве

const getRandomArray = () => {
  const arr = [];
  let a = Math.round(getRandomNumber() / 10);
  const b = Math.round(getRandomNumber() / 10);
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

// Вопрос-ответ с пользователем
const questionAnswer1 = (nameUser) => {
  console.log('What number is missing in the progression?');
  let i = 0;
  for (i; i < 3; i += 1) {
    const arr = getRandomArray();
    const index = getRandomInt(0, arr.length - 1);
    const closeNum = arr[index];
    arr[index] = '..';
    const progression = arr.join(' ');
    console.log(`Question: ${progression}`);
    const answer = getUserAnswer();
    if (Number(answer) === closeNum) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer was ${closeNum}`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
  }
  if (i > 2) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
export default questionAnswer1;
