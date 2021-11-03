import readlineSync from 'readline-sync';

// Приветствие
export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

// Получение имени пользователя
export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Получение ответа от пользователя
export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

//  Получение рандомного числа
export const getRandomNum = (min, max) => min + Math.floor(Math.random() * max - min + 1);
