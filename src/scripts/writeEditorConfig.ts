import path from 'path';
import fs from 'fs-extra';

const writeEditorConfig = async () => {
  const projectRoot = (path.join(process.cwd(), '/mock'));
  const filePath = './src/templates/.editorconfig';

  try {
    await fs.copy(filePath, path.join(projectRoot, '.editorconfig'));
    return { sucess: true };
  } catch (e) {
    console.log(e);
    return { sucess: false };
  }
};

export default writeEditorConfig;
