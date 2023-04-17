import path from 'path';
import fs from 'fs-extra';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

const writeViteConfig = async () => {
  const spinner = createSpinner(
    'Step 2.1 - Wait a moment while your "vite.config.js" file is being generated. 🦜 Parrot!',
  ).start();

  const projectRoot = path.resolve(process.cwd(), 'mock');
  // const filePath = path.resolve(projectRoot, './node_modules/parrotenv/public/vite.config.js');
  const filePath = path.resolve(projectRoot, '../templates/vite.config.js');

  try {
    await fs.copy(filePath, path.resolve(projectRoot, 'vite.config.js'));
    spinner.success({ text: '"vite.config.js" file was generated with exit.' });
  } catch (e) {
    spinner.error({
      text: `${chalk.red(`It seems that some problems occurred while your "vite.config.js" was being generated... 🦜 Parrot...,
      \n${e}`)}`,
    });
    process.exit(1);
  }
};

export default writeViteConfig;
