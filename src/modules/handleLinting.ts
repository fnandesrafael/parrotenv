import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { FrameworkProps, ManagerProps } from '../types/index.js';
import frameworks from '../data/frameworks.js';
import { installDependencies, writeConfigFile } from '../scripts/index.js';

const setupLinting = async (
  framework: FrameworkProps,
  manager: ManagerProps,
  env?: string,
) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright(
      'Linting',
    )} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    const {
      lint: { prettier },
    } = frameworks;

    await installDependencies(framework, manager);
    await writeConfigFile(framework.configFilePath, '.eslintrc.json');
    await writeConfigFile(prettier.configFilePath, '.prettierrc.json');

    if (env === 'ts') {
      await writeConfigFile(
        '/config/typescript/tsconfig.json',
        'tsconfig.json',
      );
    } else if (env === 'reactTs') {
      await writeConfigFile('/config/react-ts/tsconfig.json', 'tsconfig.json');
    }

    spinner.success({
      text: `${chalk.greenBright(
        `🦜 Parrot! Your ${chalk.magentaBright(
          'Linting',
        )} settings have been configured sucessfully.`,
      )}
      ${chalk.greenBright(
        '+',
      )} The following packages have been added to your project devDependencies: ${chalk.gray(
        framework.devDependencies,
      )}.
      ${chalk.greenBright('+')} ".prettierrc.json" file was generated.
      ${chalk.greenBright('+')} ".eslintrc.json" file was generated.
      ${
        env
          ? `${chalk.greenBright('+')} "tsconfig.json" file was generated.`
          : ''
      }
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
      text: chalk.red(`The process of setting up your ${chalk.magentaBright(
        'Linting',
      )} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleLinting = async (
  willLint: string,
  ecosystem: string,
  manager: ManagerProps,
) => {
  const {
    lint: { eslint },
  } = frameworks;

  switch (willLint) {
    case 'Yes':
      if (ecosystem === 'JavaScript') {
        await setupLinting(eslint.javascript, manager);
      } else if (ecosystem === 'React w/ JavaScript') {
        await setupLinting(eslint.reactJs, manager);
      } else if (ecosystem === 'TypeScript') {
        await setupLinting(eslint.typescript, manager, 'ts');
      } else if (ecosystem === 'React w/ TypeScript') {
        await setupLinting(eslint.reactTs, manager, 'reactTs');
      }
      break;

    default:
      break;
  }
};

export default handleLinting;
