import { greetings, getUserName, getUserAnswer } from './utils.js';

const startGame = (exercise, startPlay) => {
  greetings();
  // getUserName();
  const userName = getUserName();
  // Задание
  console.log(exercise);
  // количество раундов
  // const { question } = startPlay();
  for (let i = 1; i <= 3; i += 1) {
    const res = startPlay();
    const { question } = res;
    const { correctAnswer } = res;
    // вопрос пользователю
    console.log(`Question: ${question}`);
    // ответ пользователя
    const userAnswer = getUserAnswer();
    if (userAnswer.toString() !== correctAnswer.toString()) {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
