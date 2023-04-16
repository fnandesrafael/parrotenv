import path from 'path';
import fs from 'fs-extra';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

const writeEditorConfig = async () => {
  const spinner = createSpinner(
    'Step 2.1 - Wait a moment while your ".editorconfig" file is being generated! Parrot!',
  ).start();

  const projectRoot = path.resolve(process.cwd(), 'mock');
  const filePath = path.resolve(projectRoot, './node_modules/parrotenv/public/.editorconfig');

  try {
    await fs.copy(filePath, path.resolve(projectRoot, '.editorconfig'));
    spinner.success({ text: 'Your ".editorconfig" file was generated with exit.' });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your "editorconfig" was being generated... Parrot...,
      \n${e}`)}`,
    });
    process.exit(1);
  }
};

const writeSettingsJson = async () => {
  const spinner = createSpinner(
    'Step 2.2 - Wait a moment while your "settings.json" file is being generated! Parrot!',
  ).start();

  const projectRoot = path.resolve(process.cwd(), 'mock');
  const filePath = path.resolve(projectRoot, './node_modules/parrotenv/public/.vscode');

  try {
    await fs.copy(filePath, path.resolve(projectRoot, '.vscode'));
    spinner.success({ text: 'Your "settings.json" file was generated with exit.' });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your "settings.json" was being generated... Parrot...,
      \n${e}`)}`,
    });
    process.exit(1);
  }
};

export {
  writeEditorConfig,
  writeSettingsJson,
};
