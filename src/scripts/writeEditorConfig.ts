import fs from 'fs-extra';
import { exec } from 'child_process';

const writeEditorConfig = async (hasInit) => {
  if (hasInit) {
    const projectRoot = process.cwd();
    console.log(projectRoot);
    return { sucess: true };
  }
  exec('npm init -y');
  return { sucess: true };
};

export default writeEditorConfig;
