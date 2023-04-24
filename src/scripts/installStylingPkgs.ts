import { exec } from 'child_process';
import util from 'util';

const installCssStylingPkgs = async () => {
  await util.promisify(exec)(
    'npm i stylelint stylelint-config-standard stylelint-order -D',
    { cwd: './mock' },
  );
};

const installScssStylingPkgs = async () => {
  await util.promisify(exec)(
    'npm i stylelint stylelint-config-standard stylelint-order sass postcss-scss -D',
    { cwd: './mock' },
  );
};

const installStyledComponentsStylingPkgs = async () => {
  await util.promisify(exec)(
    'npm i stylelint stylelint-config-standard stylelint-order styled-components postcss-styled-components -D',
    { cwd: './mock' },
  );
};

const installStylingPkgs = async (project_type: string) => {
  switch (project_type) {
    case 'CSS':
      await installCssStylingPkgs();
      break;

    case 'SCSS':
      await installScssStylingPkgs();
      break;

    case 'Styled Components':
      await installStyledComponentsStylingPkgs();
      break;

    default:
      break;
  }
};

export default installStylingPkgs;
