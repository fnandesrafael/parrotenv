import path from 'path';
import fs from 'fs-extra';

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

const writeEslintrc = async (project_type) => {
  switch (project_type) {
    case 'TypeScript':
      await writeTsEslintrc();
      break;

    case 'React w/ JavaScript':
      await writeReactJsEslintrc();
      break;

    default:
      break;
  }
};

export default writeEslintrc;
