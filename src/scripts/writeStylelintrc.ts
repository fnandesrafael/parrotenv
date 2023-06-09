import path from 'path';
import fs from 'fs-extra';

const writeCssStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/css_.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/css_.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeScssStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/scss_.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/scss_.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeStyledComponentsStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/styled-components_.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/styled-components_.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeStylelintrc = async (styling_type: string) => {
  switch (styling_type) {
    case 'CSS':
      await writeCssStylelintrc();
      break;

    case 'SCSS':
      await writeScssStylelintrc();
      break;

    case 'Styled Components':
      await writeStyledComponentsStylelintrc();
      break;

    default:
      break;
  }
};

export default writeStylelintrc;
