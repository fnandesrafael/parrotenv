import path from 'path';
import fs from 'fs-extra';

const writeEditorSettings = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *   projectRoot, './node_modules/parrotenv/templates/editors/.vscode'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/editors/.vscode');

  await fs.copy(filePath, path.resolve(projectRoot, '.vscode'));
};

export default writeEditorSettings;
