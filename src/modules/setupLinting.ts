import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import installLintingPkgs from '../scripts/installLintingPkgs.js';
import writeEslintrc from '../scripts/writeEslintrc.js';
import writePrettierrc from '../scripts/writePrettierrc.js';
import writeTsConfig from '../scripts/writeTsConfig.js';

const setupJsLinting = async (project_type: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(project_type);
    await writePrettierrc();
    await writeEslintrc(project_type);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Linting')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier')}
      ${chalk.greenBright('+')} ".prettierrc.json" file was generated.
      ${chalk.greenBright('+')} ".eslintrc.json" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Linting')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupReactJsLinting = async (project_type: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(project_type);
    await writePrettierrc();
    await writeEslintrc(project_type);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Linting')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier')}
      ${chalk.greenBright('+')} ".prettierrc.json" file was generated.
      ${chalk.greenBright('+')} ".eslintrc.json" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Linting')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupTsLinting = async (project_type: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(project_type);
    await writePrettierrc();
    await writeEslintrc(project_type);
    await writeTsConfig();

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Linting')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier')}
      ${chalk.greenBright('+')} ".prettierrc.json" file was generated.
      ${chalk.greenBright('+')} ".eslintrc.json" file was generated.
      ${chalk.greenBright('+')} "tsconfig.json" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Linting')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupLinting = async (linting: string, project_type: string) => {
  switch (linting) {
    case 'Yes':
      if (project_type === 'JavaScript') {
        await setupJsLinting(project_type);
      } else if (project_type === 'React w/ JavaScript') {
        await setupReactJsLinting(project_type);
      } else if (project_type === 'TypeScript') {
        await setupTsLinting(project_type);
      }
      break;

    default:
      break;
  }
};

export default setupLinting;
