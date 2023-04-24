import path from 'path';
import fs from 'fs-extra';

const writeJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/js_.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/js_.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeReactJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/react_js_.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/react_js_.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeTsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/ts_.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/ts_.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeEslintrc = async (project_type: string) => {
  switch (project_type) {
    case 'JavaScript':
      await writeJsEslintrc();
      break;

    case 'React w/ JavaScript':
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
