import path from 'path';
import fs from 'fs-extra';

const writeViteConfig = async (extension: string) => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/settings/vite/vite.config.js'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/settings/vite/vite.config.js');

  await fs.copy(filePath, path.resolve(projectRoot, `vite.config.${extension}`));
};

export default writeViteConfig;
