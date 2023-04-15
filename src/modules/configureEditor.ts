import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { writeEditorConfig } from '../scripts/index.js';

const configureVsCode = async (hasInit) => {
  const spinner = createSpinner(
    `Step 1/? - ${chalk.blueBright('VS Code')} is being configurated`,
  ).start();
  const editorConfig = await writeEditorConfig(hasInit);

  if (editorConfig.sucess) {
    spinner.success({ text: 'VS Code has been configured with exit' });
  } else {
    spinner.error({ text: 'X(' });
    process.exit(1);
  }
};

const configureEditor = async (editor, hasInit) => {
  switch (editor) {
    case 'VS Code':
      configureVsCode(hasInit);
      break;

    default:
      break;
  }
};

export default configureEditor;
