import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import writeViteConfig from '../scripts/writeViteConfig.js';

const setupViteForReact = async () => {
  const spinner = createSpinner(
    `Step 2 - 🦜 Parrot! Your ${chalk.yellow('Vite')} is being configured.`,
  ).start();

  try {
    await writeViteConfig();

    spinner.success({ text: chalk.greenBright(`🦜 Parrot! Your ${chalk.blueBright('Vite')} settings have been configured sucessfully.`) });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.yellow('Vite')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupBuildTool = async (build_tool, project_type) => {
  switch (build_tool) {
    case 'Vite':
      if (project_type === 'React w/ JavaScript') {
        await setupViteForReact();
      }
      break;

    default:
      break;
  }
};

export default setupBuildTool;
