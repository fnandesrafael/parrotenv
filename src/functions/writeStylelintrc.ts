import path from 'path';
import fs from 'fs-extra';

const writeCssStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/css/.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/css/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeScssStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/scss/.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/scss/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeStyledComponentsStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/linters/styled-components/.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/styled-components/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeScssStyledComponentsStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot,
   * './node_modules/parrotenv/templates/linters/scss-styled-components/.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/linters/scss-styled-components/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeStylelintrc = async (styling: string) => {
  switch (styling) {
    case 'CSS':
      await writeCssStylelintrc();
      break;

    case 'SCSS':
      await writeScssStylelintrc();
      break;

    case 'Styled Components':
      await writeStyledComponentsStylelintrc();
      break;

    case 'SCSS + Styled Components':
      await writeScssStyledComponentsStylelintrc();
      break;

    default:
      break;
  }
};

export default writeStylelintrc;
