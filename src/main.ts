import inquirer from 'inquirer';
import { exec } from 'child_process';
import util from 'util';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import stripAnswers from './helpers/stripAnswers.js';
import questions from './data/questions.js';
import { askAboutNodeProject, configureEditor } from './modules/index.js';

const setupParrot = async () => {
  const spinner = createSpinner(
    `Step 1 - ${chalk.greenBright('🦜 Parrot! Wait a moment while your ParrotEnv is being configured!')}`,
  ).start();

  try {
    await util.promisify(exec)('npm install parrotenv -D', { cwd: './mock' });

    spinner.success({ text: `${chalk.greenBright('Your ParrotEnv has been configured sucessfully! 🦜 Parrot!')}` });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your ParrotEnv was being configured... Parrot...,\n${e}`)}`,
    });
    process.exit(1);
  }
};

const initSetup = async (answers) => {
  await configureEditor(answers.ide);
};

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  const hasInit = await askAboutNodeProject(stripedAnswers.npm_init);

  if (hasInit) {
    await setupParrot();
    await initSetup(stripedAnswers);
  } else {
    await util.promisify(exec)('npm init -y', { cwd: './mock' });

    await setupParrot();
    await initSetup(stripedAnswers);
  }
};

export default main;
