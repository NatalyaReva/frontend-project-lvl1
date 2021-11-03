import { getRandomNum } from '../utils.js';

//  Рандомные операции с рандомными числами
const calculate = (a, b, indexOperation) => {
  let result;
  switch (indexOperation) {
    case 0:
      result = a + b;
      break;
    case 1:
      result = a - b;
      break;
    default:
      result = a * b;
  }
  return result;
};

export const exercise = 'What is the result of the expression?';

export const startPlay = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const operation = ['+', '-', '*'];
  const indexOperation = Math.floor(Math.random() * operation.length);
  const expression = `${a} ${operation[indexOperation]} ${b}`;
  const question = expression;
  const correctAnswer = calculate(a, b, indexOperation);
  return { question: question, correctAnswer: correctAnswer };
};

export default { startPlay, exercise };
