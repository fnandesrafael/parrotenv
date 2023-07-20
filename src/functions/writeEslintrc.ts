import path from 'path';
import fs from 'fs-extra';

const writeJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/javascript/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/javascript/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeReactJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/react-js/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/react-js/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeTsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/typescript/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/typescript/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeEslintrc = async (ecosystem: string) => {
  switch (ecosystem) {
    case 'JavaScript':
      await writeJsEslintrc();
      break;

    case 'React + JavaScript':
      await writeReactJsEslintrc();
      break;

    case 'TypeScript':
      await writeTsEslintrc();
      break;

    default:
      break;
  }
};

export default writeEslintrc;
