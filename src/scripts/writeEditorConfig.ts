import path from 'path';
import fs from 'fs-extra';

const writeEditorConfig = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  // const filePath = path.resolve(projectRoot, './node_modules/parrotenv/templates/.editorconfig');
  const filePath = path.resolve(projectRoot, '../templates/.editorconfig');

  await fs.copy(filePath, path.resolve(projectRoot, '.editorconfig'));
};

export default writeEditorConfig;
