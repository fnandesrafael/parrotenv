import inquirer from 'inquirer';
import { exec } from 'child_process';
import stripAnswers from './helpers/stripAnswers.js';
import questions from './data/questions.js';
import { askAboutNodeProject, configureEditor } from './modules/index.js';

const initSetup = async (answers) => {
  await configureEditor(answers.ide);
};

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  const hasInit = await askAboutNodeProject(stripedAnswers.npm_init);

  if (hasInit) {
    initSetup(stripedAnswers);
  } else {
    exec('npm init -y', { cwd: './mock' });
    initSetup(stripedAnswers);
  }
};

export default main;
