import { exec } from 'child_process';
import util from 'util';

const installJsLintingPkgs = async () => {
  await util.promisify(exec)(
    'npm i eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier -D',
    { cwd: './mock' },
  );
};

const installReactJsLintingPkgs = async () => {
  await util.promisify(exec)(
    'npm i eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier -D',
    { cwd: './mock' },
  );
};

const installTsLintingPkgs = async () => {
  await util.promisify(exec)(
    'npm i typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier -D',
    { cwd: './mock' },
  );
};

const installReactTsLintingPkgs = async () => {
  await util.promisify(exec)(
    'npm i eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier -D',
    { cwd: './mock' },
  );
};

const installLintingPkgs = async (ecosystem: string) => {
  switch (ecosystem) {
    case 'JavaScript':
      await installJsLintingPkgs();
      break;

    case 'React w/ JavaScript':
      await installReactJsLintingPkgs();
      break;

    case 'TypeScript':
      await installTsLintingPkgs();
      break;

    case 'React w/ TypeScript':
      await installReactTsLintingPkgs();
      break;

    default:
      break;
  }
};

export default installLintingPkgs;
