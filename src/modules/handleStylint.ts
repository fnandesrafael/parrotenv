import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import frameworks from '../data/frameworks.js';
import { installStylingPkgs, writeStylelintrc } from '../functions/index.js';
import { FrameworkProps, ManagerProps } from '../types/index.js';

const setupStyling = async (framework: FrameworkProps, manager: ManagerProps) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Styling')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installStylingPkgs(framework, manager);
    await writeStylelintrc(framework.configFilePath);

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Styling')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray(framework.dependencies)}
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
  const { styling } = frameworks;

  switch (framework) {
    case 'CSS':
      await setupStyling(styling.css, manager);
      break;

    case 'SCSS':
      await setupStyling(styling.scss, manager);
      break;

    case 'Styled Components':
      await setupStyling(styling.styledComponents, manager);
      break;

    default:
      break;
  }
};

export default handleStylint;
