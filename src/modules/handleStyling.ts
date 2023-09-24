import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { FrameworkProps, ManagerProps } from '../types/index.js';
import frameworks from '../data/frameworks.js';
import { installDependencies, writeConfigFile } from '../scripts/index.js';

const setupStyling = async (framework: FrameworkProps, manager: ManagerProps) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installDependencies(framework, manager);
    await writeConfigFile(framework.configFilePath, '.stylelintrc.json');

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Styling')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray(framework.devDependencies)}.
      ${framework.dependencies !== '' ? `${chalk.greenBright('+')} The following packages have been added to your project dependencies: ${chalk.gray(framework.dependencies)}.` : ''}
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

const handleStylint = async (framework: string, manager: ManagerProps) => {
  const { style } = frameworks;

  switch (framework) {
    case 'CSS':
      await setupStyling(style.css, manager);
      break;

    case 'SCSS':
      await setupStyling(style.scss, manager);
      break;

    case 'Styled Components':
      await setupStyling(style.styledComponents, manager);
      break;

    default:
      break;
  }
};

export default handleStylint;
