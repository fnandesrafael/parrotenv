import inquirer from 'inquirer';
import { exec } from 'child_process';
import util from 'util';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import { AnswersProps, ManagerProps } from './types/index.js';
import questions from './data/questions.js';
import stripAnswers from './utils/stripAnswers.js';
import {
  handleNode, handleManager, handleBuildTool, handleLinting, handleStylint, setupEditor,
} from './modules/index.js';

const setupParrot = async (manager: ManagerProps) => {
  const spinner = createSpinner(
    `${chalk.greenBright('Wait a moment while your ParrotEnv is being installed! 🦜 Parrot! ')}`,
  ).start();

  try {
    await util.promisify(exec)(`${manager.install_command} parrotenv -D`, { cwd: './mock' });

    spinner.success({ text: `${chalk.greenBright('🦜 Parrot! Your ParrotEnv has been installed sucessfully!')}` });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your ParrotEnv was being installed... 🦜 Parrot...,\n${e}`)}`,
    });
    process.exit(1);
  }
};

const initEnvSetup = async (answers: AnswersProps, manager: ManagerProps) => {
  await handleBuildTool(answers.framework, answers.ecosystem);
  await handleLinting(answers.linting, answers.ecosystem, manager);
  await handleStylint(answers.styling);
  await setupEditor(answers.ide);
};

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  const hasInit: boolean = await handleNode(stripedAnswers.node);
  const manager = await handleManager(stripedAnswers.manager);

  if (hasInit) {
    await setupParrot(manager);
    await initEnvSetup(stripedAnswers, manager);
  } else {
    await util.promisify(exec)(manager.init_command, { cwd: './mock' });
    await setupParrot(manager);
    await initEnvSetup(stripedAnswers, manager);
  }
};

export default main;
