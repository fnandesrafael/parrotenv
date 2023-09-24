import path from 'path';
import fs from 'fs-extra';

const writeEslintrc = async (eslintrc_path: string) => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, `./node_modules/parrotenv/templates/linters/{eslintrc_path}`
   * );
   */
  const filePath = path.resolve(projectRoot, `../templates/linters/${eslintrc_path}`);

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

export default writeEslintrc;
