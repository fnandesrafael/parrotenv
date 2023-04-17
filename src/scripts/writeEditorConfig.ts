import path from 'path';
import fs from 'fs-extra';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

const writeEditorConfig = async () => {
  const spinner = createSpinner(
    'Step 4.1 - Wait a moment while your ".editorconfig" file is being generated! 🦜 Parrot!',
  ).start();

  const projectRoot = path.resolve(process.cwd(), 'mock');
  // const filePath = path.resolve(projectRoot, './node_modules/parrotenv/templates/.editorconfig');
  const filePath = path.resolve(projectRoot, '../templates/.editorconfig');

  try {
    await fs.copy(filePath, path.resolve(projectRoot, '.editorconfig'));
    spinner.success({ text: '".editorconfig" file was generated with exit.' });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your "editorconfig" was being generated... 🦜 Parrot...,
      \n${e}`)}`,
    });
    process.exit(1);
  }
};

export default writeEditorConfig;
