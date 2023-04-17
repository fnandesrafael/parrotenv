import path from 'path';
import fs from 'fs-extra';

const writePrettierrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  // const filePath = path.resolve(projectRoot, './node_modules/parrotenv/public/.vscode');
  const filePath = path.resolve(projectRoot, '../templates/.prettierrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.prettierrc.json'));
};

export default writePrettierrc;
