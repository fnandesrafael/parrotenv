import path from 'path';
import fs from 'fs-extra';

const writeConfigFile = async (configFilePath: string) => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, `./node_modules/parrotenv/templates/${configFilePath}`
   * );
   */
  const filePath = path.resolve(projectRoot, `../templates/${configFilePath}`);

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

export default writeConfigFile;
