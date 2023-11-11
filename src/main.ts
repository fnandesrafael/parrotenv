import inquirer from 'inquirer';
import { exec } from 'child_process';
import util from 'util';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import { AnswersProps, ManagerProps } from './types/index.js';
import questions from './data/questions.js';
import {
  handleNode,
  handleManager,
  handleEditor,
  handleBootstrapper,
  handleLinter,
  setupStylist,
  handleSpectator,
} from './modules/index.js';
import stripAnswers from './utils/stripAnswers.js';

const setupParrot = async (manager: ManagerProps) => {
  const spinner = createSpinner(
    `${chalk.greenBright(
      'Wait a moment while your ParrotEnv is being installed! 🦜 Parrot! ',
    )}`,
  ).start();

  try {
    await util.promisify(exec)(`${manager.installCommand} parrotenv -D`, {
      cwd: './mock',
    });

    spinner.success({
      text: `${chalk.greenBright(
        '🦜 Parrot! Your "parrotenv" package has been installed sucessfully! Wait while your environment is being set up.',
      )}
    `,
    });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(
        `It seems that some problems occurred while your ParrotEnv was being installed... 🦜 Parrot...,\n${e}`,
      )}`,
    });
    process.exit(1);
  }
};

const initEnvSetup = async (answers: AnswersProps, manager: ManagerProps) => {
  await handleEditor(answers.ide, manager);
  await handleBootstrapper(answers.bootstrapper, answers.ecosystem);
  await handleLinter(answers.willLint, answers.ecosystem, manager);
  await setupStylist(answers.stylist, manager);
  await handleSpectator(answers.bootstrapper, answers.spectator, manager);
};

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  const hasInit: boolean = await handleNode(stripedAnswers.hasNode);
  const manager = await handleManager(stripedAnswers.manager);

  if (hasInit) {
    await setupParrot(manager);
    await initEnvSetup(stripedAnswers, manager);
  } else {
    await util.promisify(exec)(manager.initCommand, { cwd: './mock' });
    await setupParrot(manager);
    await initEnvSetup(stripedAnswers, manager);
  }
};

export default main;
