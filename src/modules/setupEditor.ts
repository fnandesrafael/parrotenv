import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { writeEditorConfig, writeEditorSettings } from '../functions/index.js';

const setupVsCode = async () => {
  const spinner = createSpinner(
    `Your ${chalk.blueBright('VS Code')} is being configured. 🦜 Parrot!`,
  ).start();

  try {
    await writeEditorConfig();
    await writeEditorSettings();

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.blueBright('VS Code')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} ".editorconfig" file was generated.
      ${chalk.greenBright('+')} "settings.json" file was generated on .vscode.`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.blueBright('VS Code')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const setupEditor = async (ide: string) => {
  switch (ide) {
    case 'VS Code':
      await setupVsCode();
      break;

    default:
      break;
  }
};

export default setupEditor;
