import path from 'path';
import fs from 'fs-extra';

const writeJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linting/javascript/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linting/javascript/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeReactJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linting/react-js/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linting/react-js/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeTsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linting/typescript/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linting/typescript/.eslintrc.json');

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
