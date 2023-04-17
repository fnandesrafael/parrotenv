import path from 'path';
import fs from 'fs-extra';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

const writeSettingsJson = async () => {
  const spinner = createSpinner(
    'Step 4.2 - Wait a moment while your "settings.json" file is being generated! 🦜 Parrot!',
  ).start();

  const projectRoot = path.resolve(process.cwd(), 'mock');
  // const filePath = path.resolve(projectRoot, './node_modules/parrotenv/public/.vscode');
  const filePath = path.resolve(projectRoot, '../templates/.vscode');

  try {
    await fs.copy(filePath, path.resolve(projectRoot, '.vscode'));
    spinner.success({ text: '"settings.json" file was generated with exit.' });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your "settings.json" was being generated... 🦜 Parrot...,
      \n${e}`)}`,
    });
    process.exit(1);
  }
};

export default writeSettingsJson;
