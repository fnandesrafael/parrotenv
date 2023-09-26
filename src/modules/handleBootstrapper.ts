import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { writeConfigFile } from '../scripts/index.js';
import { FrameworkProps } from '../types/index.js';
import settings from '../data/settings.js';

const setupBootstrapper = async (framework: FrameworkProps) => {
  const spinner = createSpinner(
    `Your ${chalk.yellow('Bootstrapper')} is being configured. 🦜 Parrot! `,
  ).start();

  try {
    framework.configFiles.forEach(async (config) => {
      await writeConfigFile(config.configFilePath, config.configFileName);
    });

    spinner.success({
      text: `${chalk.greenBright(
        `🦜 Parrot! Your ${chalk.yellow(
          'Bootstrapper',
        )} settings have been configured successfully.`,
      )}
      `,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.yellow(
        'Bootstrapper',
      )} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleBootstrapper = async (framework: string, ecosystem: string) => {
  const {
    bootstrappers: { viteJs, viteTs },
  } = settings;

  switch (framework) {
    case 'Vite':
      if (ecosystem === 'React w/ JavaScript') {
        await setupBootstrapper(viteJs);
      } else if (ecosystem === 'React w/ TypeScript') {
        await setupBootstrapper(viteTs);
      }
      break;

    default:
      break;
  }
};

export default handleBootstrapper;
