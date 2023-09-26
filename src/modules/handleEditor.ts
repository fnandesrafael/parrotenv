import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import settings from '../data/settings.js';
import { installDependencies, writeConfigFile } from '../scripts/index.js';
import { FrameworkProps, ManagerProps } from '../types/index.js';

const setupEditor = async (
  framework: FrameworkProps,
  manager: ManagerProps,
) => {
  const spinner = createSpinner(
    `Your ${chalk.blueBright('Editor')} is being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installDependencies(framework, manager);
    framework.configFiles.forEach(async (config) => {
      await writeConfigFile(config.configFilePath, config.configFileName);
    });

    spinner.success({
      text: `${chalk.greenBright(
        `🦜 Parrot! Your ${chalk.blueBright(
          'Editor',
        )} settings have been configured sucessfully.`,
      )}
      `,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.blueBright(
        'Editor',
      )} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleEditor = async (ide: string, manager: ManagerProps) => {
  const {
    editors: { vscode },
  } = settings;

  switch (ide) {
    case 'VS Code':
      await setupEditor(vscode, manager);
      break;

    default:
      break;
  }
};

export default handleEditor;
