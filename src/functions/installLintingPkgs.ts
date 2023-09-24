import { exec } from 'child_process';
import util from 'util';
import { ManagerProps } from '../types/index.js';

const installLintingPkgs = async (packages: string, manager: ManagerProps) => {
  await util.promisify(exec)(
    `${manager.installCommand} ${packages} -D`,
    { cwd: './mock' },
  );
};

export default installLintingPkgs;
