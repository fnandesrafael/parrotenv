import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { FrameworkProps, ManagerProps } from '../types/index.js';
import frameworks from '../data/settings.js';
import installDependencies from '../scripts/installDependencies.js';
import writeConfigFile from '../scripts/writeConfigFile.js';

const setupTesting = async (
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
    await writeConfigFile(framework.configFilePath, 'jest.config.json');
    await writeConfigFile(
      'config/babel/babel.config.json',
      'babel.config.json',
    );
    await writeConfigFile('config/jest/.jest', '.jest');

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
      ${chalk.greenBright('+')} "jest.config.json" file was generated.
      ${chalk.greenBright('+')} "babel.config.json" file was generated.
      ${chalk.greenBright(
        '+',
      )} "setup-test.js" file was generated at .jest folder.
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

const handleTesting = async (framework: string, manager: ManagerProps) => {
  const { test } = frameworks;

  switch (framework) {
    case 'Jest + RTL':
      setupTesting(test.jestRtl, manager);
      break;

    default:
      break;
  }
};

export default handleTesting;
