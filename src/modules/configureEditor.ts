import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { writeEditorConfig } from '../scripts/index.js';

const configureVsCode = async () => {
  const spinner = createSpinner(
    `Step 1/? - ${chalk.blueBright('VS Code')} is being configurated`,
  ).start();
  const editorConfig = await writeEditorConfig();

  if (editorConfig.sucess) {
    spinner.success({ text: 'VS Code has been configured with exit' });
  } else {
    spinner.error({ text: 'The process to build the editor configuration failed' });
    process.exit(1);
  }
};

const configureEditor = async (editor) => {
  switch (editor) {
    case 'VS Code':
      configureVsCode();
      break;

    default:
      break;
  }
};

export default configureEditor;
