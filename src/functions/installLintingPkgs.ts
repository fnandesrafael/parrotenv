import { exec } from 'child_process';
import util from 'util';

const installLintingPkgs = async (packages: string) => {
  await util.promisify(exec)(
    `npm i ${packages} -D`,
    { cwd: './mock' },
  );
};

export default installLintingPkgs;
