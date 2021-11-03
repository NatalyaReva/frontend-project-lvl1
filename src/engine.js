import { greetings, getUserName, getUserAnswer } from './utils.js';
import exercise, { startPlay } from './games/calc.js';

export const startGame = (rule, getAnswer) => {
  greetings();
  //getUserName();
  const userName = 'Bob'; //getUserName();
  // Задание
  console.log(exercise);
  // количество раундов
  //const { question } = startPlay();
  const res = startPlay();
  const question = res.question;
  const { correctAnswer } = res;
  for (let i = 0; i <= 3; i += 1) {
  // вопрос пользователю
    console.log(`Question: ${question}`);
    // ответ пользователя
    const userAnswer = getUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
