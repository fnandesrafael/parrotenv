import inquirer from 'inquirer';
import stripAnswers from './helpers/stripAnswers.js';
import questions from './data/questions.js';
import { askAboutNodeProject, configureEditor } from './modules/index.js';

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  const hasInit = await askAboutNodeProject(stripedAnswers.npm_init);
  await configureEditor(stripedAnswers.ide, hasInit);
};

export default main;
