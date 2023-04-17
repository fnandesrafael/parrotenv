import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import installPackages from '../scripts/installPackages.js';
import writeEslintrc from '../scripts/writeEslintrc.js';

const setupTsLinting = async (project_type) => {
  const spinner = createSpinner(
    `Your ${chalk.blue('TypeScript')} ${chalk.magentaBright('linting')} is being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installPackages(project_type);
    await writeEslintrc(project_type);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.blue('TypeScript')} ${chalk.magentaBright('linting')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier')} `,
    });
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
