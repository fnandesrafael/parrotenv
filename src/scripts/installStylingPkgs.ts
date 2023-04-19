import { exec } from 'child_process';
import util from 'util';

const installVanillaStylingPkgs = async () => {
  await util.promisify(exec)(
    'npm i stylelint stylelint-config-standard stylelint-order -D',
    { cwd: './mock' },
  );
};

const installReactStylingPkgs = async () => {
  await util.promisify(exec)(
    'npm i stylelint stylelint-config-standard stylelint-order styled-components postcss-styled-components -D',
    { cwd: './mock' },
  );
};

const installStylingPkgs = async (project_type: string) => {
  switch (project_type) {
    case ('React w/ JavaScript'):
      installReactStylingPkgs();
      break;

    default:
      installVanillaStylingPkgs();
      break;
  }
};

export default installStylingPkgs;
