import path from 'path';
import fs from 'fs-extra';

const writeStylelintrc = async (configFilePath: string) => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot,
   * `./node_modules/parrotenv/templates/linters/${configFilePath}`
   * );
   */
  const filePath = path.resolve(projectRoot, `../templates/linters/${configFilePath}`);

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

export default writeStylelintrc;
