import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { writeConfigFile } from '../scripts/index';

const setupEditor = async () => {
  const spinner = createSpinner(
    `Your ${chalk.blueBright('Editor')} is being configured. 🦜 Parrot!`,
  ).start();

  try {
    await writeConfigFile('ide/vscode/.editorconfig', '.editorconfig');
    await writeConfigFile('ide/vscode/.vscode', '.vscode');

    spinner.success({
      text: `${chalk.greenBright(
        `🦜 Parrot! Your ${chalk.blueBright(
          'VS Code',
        )} settings have been configured sucessfully.`,
      )}
      ${chalk.greenBright('+')} ".editorconfig" file was generated.
      ${chalk.greenBright('+')} "settings.json" file was generated on .vscode.
      `,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.blueBright(
        'VS Code',
      )} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleEditor = async (ide: string) => {
  switch (ide) {
    case 'VS Code':
      await setupEditor();
      break;

    default:
      break;
  }
};

export default handleEditor;
