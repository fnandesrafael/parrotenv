import path from 'path';
import fs from 'fs-extra';

const writeTsTsconfig = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/settings/typescript/tsconfig.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/settings/typescript/tsconfig.json');

  await fs.copy(filePath, path.resolve(projectRoot, 'tsconfig.json'));
};

const writeReactTsTsconfig = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/settings/react-ts/tsconfig.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/settings/react-ts/tsconfig.json');

  await fs.copy(filePath, path.resolve(projectRoot, 'tsconfig.json'));
};

const writeTsconfig = async (ecosystem: string) => {
  switch (ecosystem) {
    case 'TypeScript':
      await writeTsTsconfig();
      break;

    case 'React w/ TypeScript':
      await writeReactTsTsconfig();
      break;

    default:
      break;
  }
};

export default writeTsconfig;
