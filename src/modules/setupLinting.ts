import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import installLintingPkgs from '../functions/installLintingPkgs.js';
import writeEslintrc from '../functions/writeEslintrc.js';
import writePrettierrc from '../functions/writePrettierrc.js';
import writeTsconfig from '../functions/writeTsConfig.js';

const setupJsLinting = async (ecosystem: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(ecosystem);
    await writePrettierrc();
    await writeEslintrc(ecosystem);

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

const setupReactJsLinting = async (ecosystem: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(ecosystem);
    await writePrettierrc();
    await writeEslintrc(ecosystem);

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

const setupTsLinting = async (ecosystem: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(ecosystem);
    await writePrettierrc();
    await writeEslintrc(ecosystem);
    await writeTsconfig(ecosystem);

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

const setupReactTsLinting = async (ecosystem: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(ecosystem);
    await writePrettierrc();
    await writeEslintrc(ecosystem);
    await writeTsconfig(ecosystem);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Linting')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier')}
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

const setupLinting = async (linting: string, ecosystem: string) => {
  switch (linting) {
    case 'Yes':
      if (ecosystem === 'JavaScript') {
        await setupJsLinting(ecosystem);
      } else if (ecosystem === 'React w/ JavaScript') {
        await setupReactJsLinting(ecosystem);
      } else if (ecosystem === 'TypeScript') {
        await setupTsLinting(ecosystem);
      } else if (ecosystem === 'React w/ TypeScript') {
        await setupReactTsLinting(ecosystem);
      }
      break;

    default:
      break;
  }
};

export default setupLinting;
