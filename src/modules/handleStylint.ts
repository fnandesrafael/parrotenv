import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { installStylingPkgs, writeStylelintrc } from '../functions/index.js';

const setupCssStyling = async (styling: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(styling);
    await writeStylelintrc(styling);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Styling')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('stylelint stylelint-config-standard stylelint-order')}
      ${chalk.greenBright('+')} ".stylelintrc.json" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Styling')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupScssStyling = async (styling: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(styling);
    await writeStylelintrc(styling);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Styling')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('stylelint stylelint-config-standard stylelint-order sass postcss-scss')}
      ${chalk.greenBright('+')} ".stylelintrc.json" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Styling')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupStyledComponentsStyling = async (styling: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(styling);
    await writeStylelintrc(styling);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Styling')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('stylelint stylelint-config-standard stylelint-order styled-components postcss-styled-components')}
      ${chalk.greenBright('+')} ".stylelintrc.json" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Styling')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupScssStyledComponentsStyling = async (styling: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(styling);
    await writeStylelintrc(styling);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Styling')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('stylelint stylelint-config-standard stylelint-order sass postcss-scss styled-components postcss-styled-components')}
      ${chalk.greenBright('+')} ".stylelintrc.json" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Styling')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleStylint = async (styling: Array<string>) => {
  if (styling.length <= 1) {
    switch (styling[0]) {
      case 'CSS':
        await setupCssStyling(styling[0]);
        break;

      case 'SCSS':
        await setupScssStyling(styling[0]);
        break;

      case 'Styled Components':
        await setupStyledComponentsStyling(styling[0]);
        break;
      default:
        break;
    }
  } else if (styling.length === 2 && styling.includes('SCSS') && styling.includes('Styled Components')) {
    await setupScssStyledComponentsStyling('SCSS + Styled Components');
  } else if (styling.length === 2 && styling.includes('CSS') && styling.includes('SCSS')) {
    await setupScssStyling('SCSS');
  } else if (styling.length === 2 && styling.includes('CSS') && styling.includes('Styled Components')) {
    await setupScssStyling('Styled Components');
  }
};

export default handleStylint;
