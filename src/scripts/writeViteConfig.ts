import path from 'path';
import fs from 'fs-extra';

const writeViteConfig = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/tools/vite.config.js'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/tools/vite.config.js');

  await fs.copy(filePath, path.resolve(projectRoot, 'vite.config.js'));
};

export default writeViteConfig;
