import path from 'path';
import fs from 'fs-extra';

const writeTsconfig = async (tsconfigPath: string) => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, `./node_modules/parrotenv/templates/settings/${tsconfigPath}`
   * );
   */
  const filePath = path.resolve(projectRoot, `../templates/settings/${tsconfigPath}`);

  await fs.copy(filePath, path.resolve(projectRoot, 'tsconfig.json'));
};

export default writeTsconfig;
