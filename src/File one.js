import readlineSync from 'readline-sync';

// Вывод рандомного числа
const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 101);
  return randomNumber;
};

// Получение ответа от пользователя
const getUserAnswer = () => {
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
const questionsAnswes = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no" ');
  const result = getRandomNumber();
  console.log(`Question: ${result}`);
  const answer = getUserAnswer();
  if (answer === evenOrOdd(result)) {
    console.log('Correct!');
  }

  if (answer !== evenOrOdd(result)) {
    console.log(`${answer} is wrong answer correct answer ${evenOrOdd()}`);
    const userName = readlineSync.question()
    console.log(`Let's try  again, ${userName}!`);
  }
};
export default questionsAnswes;


const result2 = getRandomNumber();
console.log(`Question: ${result2}`);
const answer2 = getUserAnswer();
if (answer2 === evenOrOdd(result2)) {
  console.log('Correct!');
}

const result3 = getRandomNumber();
console.log(`Question: ${result3}`);
const answer3 = getUserAnswer();
if (answer3 === evenOrOdd(result3)) {
  console.log('Correct!');
}
// вызываем имя пользователя из файла cli
console.log('Congratulations!');
