import inquirer from 'inquirer';
import { exec } from 'child_process';
import util from 'util';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import stripAnswers from './utils/stripAnswers.js';
import questions from './data/questions.js';
import {
  verifyNode, setupBuildTool, handleLinting, setupEditor,
} from './modules/index.js';
import Answers from './types/Answers.js';
import setupStylint from './modules/setupStyling.js';

const setupParrot = async () => {
  const spinner = createSpinner(
    `${chalk.greenBright('Wait a moment while your ParrotEnv is being installed! 🦜 Parrot! ')}`,
  ).start();

  try {
    await util.promisify(exec)('npm install parrotenv -D', { cwd: './mock' });

    spinner.success({ text: `${chalk.greenBright('🦜 Parrot! Your ParrotEnv has been installed sucessfully!')}` });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your ParrotEnv was being installed... 🦜 Parrot...,\n${e}`)}`,
    });
    process.exit(1);
  }
};

const initEnvSetup = async (answers: Answers) => {
  await setupBuildTool(answers.framework, answers.ecosystem);
  await handleLinting(answers.linting, answers.ecosystem);
  await setupEditor(answers.ide);
  await setupStylint(answers.styling);
};

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  const hasInit: boolean = await verifyNode(stripedAnswers.node);

  if (hasInit) {
    await setupParrot();
    await initEnvSetup(stripedAnswers);
  } else {
    await util.promisify(exec)('npm init -y', { cwd: './mock' });
    await setupParrot();
    await initEnvSetup(stripedAnswers);
  }
};

export default main;
