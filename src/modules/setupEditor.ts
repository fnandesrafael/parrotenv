import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { writeEditorConfig, writeSettingsJson } from '../scripts/index.js';

const setupVsCode = async () => {
  const spinner = createSpinner(
    `Step 2 - Parrot! Your ${chalk.blueBright('VS Code')} is being configured.`,
  ).start();

  try {
    await writeEditorConfig();
    await writeSettingsJson();

    spinner.success({ text: chalk.greenBright(`🦜 Parrot! Your ${chalk.blueBright('VS Code')} settings have been configured sucessfully.`) });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up the editor settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupEditor = async (editor) => {
  switch (editor) {
    case 'VS Code':
      setupVsCode();
      break;

    default:
      break;
  }
};

export default setupEditor;
