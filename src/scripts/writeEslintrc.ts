import path from 'path';
import fs from 'fs-extra';

const writeTsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  // const filePath = path.resolve(projectRoot, './node_modules/parrotenv/public/.vscode');
  const filePath = path.resolve(projectRoot, '../templates/typescript/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeEslintrc = async (project_type) => {
  switch (project_type) {
    case 'TypeScript':
      await writeTsEslintrc();
      break;

    default:
      break;
  }
};

export default writeEslintrc;
