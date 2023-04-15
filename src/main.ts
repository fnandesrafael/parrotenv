import inquirer from 'inquirer';
import stripAnswers from './helpers/stripAnswers.js';
import questions from './data/questions.js';

const main = async () => {
  const answers = await inquirer.prompt(questions);

  console.log(stripAnswers(Object.values(answers)));
};

export default main;
