import inquirer from 'inquirer';
import { exec } from 'child_process';
import util from 'util';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import stripAnswers from './utils/stripAnswers.js';
import questions from './data/questions.js';
import {
  verifyNode, setupBuildTool, setupLinting, setupEditor,
} from './modules/index.js';

const setupParrot = async () => {
  const spinner = createSpinner(
    `Step 1 - ${chalk.greenBright('🦜 Parrot! Wait a moment while your ParrotEnv is being configured!')}`,
  ).start();

  try {
    await util.promisify(exec)('npm install parrotenv -D', { cwd: './mock' });

    spinner.success({ text: `${chalk.greenBright('🦜 Parrot! Your ParrotEnv has been configured sucessfully!')}` });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your ParrotEnv was being configured... 🦜 Parrot...,\n${e}`)}`,
    });
    process.exit(1);
  }
};

const initEnv = async (answers) => {
  await setupBuildTool(answers.build_tool, answers.project_type);
  await setupLinting(answers.linting, answers.project_type);
  await setupEditor(answers.ide);
};

const main = async () => {
  const answers = await inquirer.prompt(questions);
  const stripedAnswers = stripAnswers(answers);

  const hasInit = await verifyNode(stripedAnswers.npm_init);

  if (hasInit) {
    await setupParrot();
    await initEnv(stripedAnswers);
  } else {
    await util.promisify(exec)('npm init -y', { cwd: './mock' });
    await setupParrot();
    await initEnv(stripedAnswers);
  }
};

export default main;
