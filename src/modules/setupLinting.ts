import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import installPackages from '../scripts/installPackages.js';

const setupTsLinting = async (project_type) => {
  const spinner = createSpinner(
    `Step 2 - 🦜 Parrot! Your ${chalk.blue('TypeScript')} ${chalk.magentaBright('linting')} is being configured.`,
  ).start();

  try {
    await installPackages(project_type);

    spinner.success({ text: chalk.greenBright(`🦜 Parrot! Your ${chalk.blue('TypeScript')} ${chalk.magentaBright('linting')} settings have been configured sucessfully.`) });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('linting')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupLinting = async (linting, project_type) => {
  switch (linting) {
    case 'Yes':
      if (project_type === 'TypeScript') {
        await setupTsLinting(project_type);
      }
      break;

    default:
      break;
  }
};

export default setupLinting;
