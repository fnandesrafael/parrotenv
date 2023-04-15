import inquirer from 'inquirer';
import stripAnswers from './helpers/stripAnswers.js';
import questions from './data/questions.js';
import configureEditor from './modules/configureEditor.js';

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  configureEditor(stripedAnswers.ide);
};

export default main;
