import path from 'path';
import fs from 'fs-extra';

const writePrettierrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/editors/.prettierrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/editors/.prettierrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.prettierrc.json'));
};

export default writePrettierrc;
