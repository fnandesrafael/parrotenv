import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { installStylingPkgs, writeStylelintrc } from '../scripts/index.js';

const setupVanillaStylint = async (project_type: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(project_type);
    await writeStylelintrc(project_type);

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

const setupReactStylint = async (project_type: string) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(project_type);
    await writeStylelintrc(project_type);

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

const setupStylint = async (styling: string, project_type: string) => {
  switch (styling) {
    case 'Yes':
      if (project_type === 'React w/ JavaScript') {
        await setupReactStylint(project_type);
      } else {
        await setupVanillaStylint(project_type);
      }
      break;

    default:
      break;
  }
};
export default setupStylint;
