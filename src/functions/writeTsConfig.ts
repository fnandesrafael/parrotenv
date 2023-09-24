import path from 'path';
import fs from 'fs-extra';

const writeTsconfig = async (tsconfig_path: string) => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, `./node_modules/parrotenv/templates/settings/${tsconfig_path}`
   * );
   */
  const filePath = path.resolve(projectRoot, `../templates/settings/${tsconfig_path}`);

  await fs.copy(filePath, path.resolve(projectRoot, 'tsconfig.json'));
};

export default writeTsconfig;
