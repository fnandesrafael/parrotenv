import inquirer from 'inquirer';
import questions from './data/questions.js';

const main = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

export default main;
