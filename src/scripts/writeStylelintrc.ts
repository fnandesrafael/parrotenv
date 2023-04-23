import path from 'path';
import fs from 'fs-extra';

const writeSassStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/styling/scss/.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/styling/scss/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeStyledComponentsStylelintrc = async () => {
  const projectRoot = path.resolve(process.cwd(), 'mock');
  /**
   * const filePath = path.resolve(
   *  projectRoot, './node_modules/parrotenv/templates/styling/styled-components/.stylelintrc.json'
   * );
   */
  const filePath = path.resolve(projectRoot, '../templates/styling/styled-components/.stylelintrc.json');

  await fs.copy(filePath, path.resolve(projectRoot, '.stylelintrc.json'));
};

const writeStylelintrc = async (styling_type: string) => {
  switch (styling_type) {
    case 'Sass':
      await writeSassStylelintrc();
      break;

    case 'Styled Components':
      await writeStyledComponentsStylelintrc();
      break;

    default:
      break;
  }
};

export default writeStylelintrc;
