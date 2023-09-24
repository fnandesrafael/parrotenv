import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import writeConfigFile from '../scripts/writeConfigFile.js';

const setupVite = async () => {
  const spinner = createSpinner(
    `Your ${chalk.yellow('Vite')} is being configured. 🦜 Parrot! `,
  ).start();

  try {
    await writeConfigFile('config/vite/vite.config.js', 'vite.config.js');

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.yellow('Vite')} settings have been configured successfully.`)}
      ${chalk.greenBright('+')} "vite.config.js" file was generated.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.yellow('Vite')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleBuildTool = async (framework: string, ecosystem: string) => {
  switch (framework) {
    case 'Vite':
      if (ecosystem === 'React w/ JavaScript' || ecosystem === 'React w/ TypeScript') {
        await setupVite();
      }
      break;

    default:
      break;
  }
};

export default handleBuildTool;
