import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { FrameworkProps, ManagerProps } from '../types/index.js';
import frameworks from '../data/settings.js';
import {
  installDependencies,
  runAdditionalCmd,
  writeConfigFile,
} from '../scripts/index.js';

const setupStylist = async (
  framework: FrameworkProps,
  manager: ManagerProps,
) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright(
      'Style',
    )} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installDependencies(framework, manager);
    framework.configFiles.forEach(async (config) => {
      await writeConfigFile(config.configFilePath, config.configFileName);
    });

    if (framework.additionalCmd) {
      await runAdditionalCmd(framework.additionalCmd);
    }

    spinner.success({
      text: `${chalk.greenBright(
        `🦜 Parrot! Your ${chalk.magentaBright(
          'Style',
        )} settings have been configured successfully.`,
      )}
      ${chalk.greenBright(
        '+',
      )} The following packages have been added to your project devDependencies: ${chalk.gray(
        framework.devDependencies,
      )}.
      ${chalk.greenBright('+')} ".stylelintrc.json" file was generated.
      ${
        framework.dependencies !== ''
          ? `${chalk.greenBright(
              '+',
            )} The following packages have been added to your project dependencies: ${chalk.gray(
              framework.dependencies,
            )}.`
          : ''
      }
      `,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright(
        'Style',
      )} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleStylist = async (framework: string, manager: ManagerProps) => {
  const {
    stylists: { stylelintCss, stylelintScss, stylelintSc, stylelintTailwind },
  } = frameworks;

  switch (framework) {
    case 'CSS':
      await setupStylist(stylelintCss, manager);
      break;

    case 'SCSS':
      await setupStylist(stylelintScss, manager);
      break;

    case 'Styled Components':
      await setupStylist(stylelintSc, manager);
      break;

    case 'Tailwind':
      await setupStylist(stylelintTailwind, manager);
      break;

    default:
      break;
  }
};

export default handleStylist;
