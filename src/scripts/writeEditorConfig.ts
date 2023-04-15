import path from 'path';
import fs from 'fs-extra';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

const writeEditorConfig = async () => {
  const spinner = createSpinner(
    'Step 2/1 - Wait a moment while your ".editorconfig" file is being generated! Parrot!',
  ).start();

  const projectRoot = process.cwd();
  const filePath = path.resolve(projectRoot, './node_modules/parrotenv/public/.editorconfig');

  try {
    await fs.copy(filePath, path.resolve(projectRoot, '.editorconfig'));
    spinner.success({ text: 'Your ".editorconfig" file was generated with exit.' });
    return { sucess: true };
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your "editorconfig" was being generated... Parrot...,
      \n${e}`)}`,
    });
    return { sucess: false };
  }
};

export default writeEditorConfig;
