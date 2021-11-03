import { greetings, getUserName, getUserAnswer } from './utils.js';
import { startPlay, exercise } from './games/calc.js';

export const startGame = (rule, getAnswer) => {
  greetings();
  // getUserName();
  const userName = getUserName();
  // Задание
  console.log(exercise);
  // количество раундов
  // const { question } = startPlay();
  for (let i = 1; i <= 3; i += 1) {
    const res = startPlay();
    const question = res.question;
    const { correctAnswer } = res;
    // вопрос пользователю
    console.log(`Question: ${question}`);
    // ответ пользователя
    const userAnswer = getUserAnswer();
    if (Number(userAnswer) === correctAnswer) {
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
