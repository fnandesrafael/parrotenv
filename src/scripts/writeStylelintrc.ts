import path from 'path';
import fs from 'fs-extra';

const writeVanillaStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/react-js/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/javascript/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeReactStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/react-js/.eslintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/react-js/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeStylelintrc = async (project_type: string) => {
  switch (project_type) {
    case 'React w/ JavaScript':
      writeReactStylelintrc();
      break;

    default:
      writeVanillaStylelintrc();
      break;
  }
};

export default writeStylelintrc;
