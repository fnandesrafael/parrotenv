import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { installStylingPkgs, writeStylelintrc } from '../scripts/index.js';

const setupSassStyling = async (styling_type: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(styling_type);
    await writeStylelintrc(styling_type);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Linting')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray('stylelint stylelint-config-standard stylelint-order sass')}
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

const setupStyledComponentsStyling = async (styling_type: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(styling_type);
    await writeStylelintrc(styling_type);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Linting')} settings have been configured sucessfully.`)}
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

const setupStylint = async (styling_type: string) => {
  switch (styling_type) {
    case 'Sass':
      await setupSassStyling(styling_type);
      break;

    case 'Styled Components':
      await setupStyledComponentsStyling(styling_type);
      break;
    default:
      break;
  }
};
export default setupStylint;
