import { exec } from 'child_process';
import util from 'util';

const installTsLintingPkgs = async () => {
  await util.promisify(exec)(
    'npm i typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier -D',
    { cwd: './mock' },
  );
};

const installPackages = async (project_type) => {
  switch (project_type) {
    case 'TypeScript':
      await installTsLintingPkgs();
      break;

    default:
      break;
  }
};

export default installPackages;
