import readlineSync from 'readline-sync';

//  Вывод рандомного числа
export const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 101);
  return randomNumber;
};

//  Получение ответа от пользователя
export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');

  return userAnswer;
};

// Определение четное или нечетное число
const evenOrOdd = (result) => {
  if (result % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Вопрос-ответ с пользователем
const questionAnswer = (nameUser) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no" ');
  let i = 0;
  for (i; i < 3; i += 1) {
    const result = getRandomNumber();
    console.log(`Question: ${result}`);
    const answer = getUserAnswer();
    if (answer === evenOrOdd(result)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer;(. Correct answer was ${evenOrOdd(result)}`);
      console.log(`Let's try  again, ${nameUser}!`);
      break;
    }
  }
  if (i > 2) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
export default questionAnswer;
