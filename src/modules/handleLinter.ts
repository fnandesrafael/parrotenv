import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { FrameworkProps, ManagerProps } from '../types/index.js';
import frameworks from '../data/settings.js';
import { installDependencies, writeConfigFile } from '../scripts/index.js';

const setupLinter = async (
  framework: FrameworkProps,
  manager: ManagerProps,
) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright(
      'Lint',
    )} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installDependencies(framework, manager);
    framework.configFiles.forEach(async (config) => {
      await writeConfigFile(config.configFilePath, config.configFileName);
    });

    spinner.success({
      text: `${chalk.greenBright(
        `🦜 Parrot! Your ${chalk.magentaBright(
          'Lint',
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
            )}.
            `
          : ''
      }`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright(
        'Lint',
      )} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleLinter = async (
  willLint: string,
  ecosystem: string,
  manager: ManagerProps,
) => {
  const {
    linters: { eslintJs, eslintReactJs, eslintTs, eslintReactTs },
  } = frameworks;

  switch (willLint) {
    case 'Yes':
      if (ecosystem === 'JavaScript') {
        await setupLinter(eslintJs, manager);
      } else if (ecosystem === 'React w/ JavaScript') {
        await setupLinter(eslintReactJs, manager);
      } else if (ecosystem === 'TypeScript') {
        await setupLinter(eslintTs, manager);
      } else if (ecosystem === 'React w/ TypeScript') {
        await setupLinter(eslintReactTs, manager);
      }
      break;

    default:
      break;
  }
};

export default handleLinter;
