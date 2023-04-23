import path from 'path';
import fs from 'fs-extra';

const writeTsConfig = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linting/typescript/tsconfig.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linting/typescript/tsconfig.json');

  await fs.copy(filePath, path.resolve(projectRoot, 'tsconfig.json'));
};

export default writeTsConfig;
