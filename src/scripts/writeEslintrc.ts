import path from 'path';
import fs from 'fs-extra';

const writeJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/javascript/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/javascript/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeReactJsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/react-js/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/react-js/.eslintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.eslintrc.json'));
};

const writeTsEslintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/typescript/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/typescript/.eslintrc.json');

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
