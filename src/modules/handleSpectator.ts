import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { FrameworkProps, ManagerProps } from '../types/index.js';
import frameworks from '../data/settings.js';
import installDependencies from '../scripts/installDependencies.js';
import writeConfigFile from '../scripts/writeConfigFile.js';

const setupSpectator = async (
  framework: FrameworkProps,
  manager: ManagerProps,
) => {
  const spinner = createSpinner(
    `Your ${chalk.greenBright(
      'Testing',
    )} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installDependencies(framework, manager);
    framework.configFiles.forEach(async (config) => {
      await writeConfigFile(config.configFilePath, config.configFileName);
    });

    spinner.success({
      text: `${chalk.greenBright(
        `🦜 Parrot! Your ${chalk.greenBright(
          'Testing',
        )} settings have been configured sucessfully.`,
      )}
      ${chalk.greenBright(
        '+',
      )} The following packages have been added to your project devDependencies: ${chalk.gray(
        framework.devDependencies,
      )}.
      ${
        framework.dependencies !== ''
          ? `${chalk.greenBright(
              '+',
            )} The following packages have been added to your project dependencies: ${chalk.gray(
              framework.dependencies,
            )}.`
          : ''
      }`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.greenBright(
        'Testing',
      )} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleSpectator = async (framework: string, manager: ManagerProps) => {
  const { spectators } = frameworks;

  switch (framework) {
    case 'Jest + RTL':
      setupSpectator(spectators.jestRtl, manager);
      break;

    default:
      break;
  }
};

export default handleSpectator;
