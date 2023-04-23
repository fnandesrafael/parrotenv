import path from 'path';
import fs from 'fs-extra';

const writeEditorSettings = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  // const filePath = path.resolve(projectRoot, './node_modules/parrotenv/templates/edito/.vscode');
  const filePath = path.resolve(projectRoot, '../templates/editor/.vscode');

  await fs.copy(filePath, path.resolve(projectRoot, '.vscode'));
};

export default writeEditorSettings;
