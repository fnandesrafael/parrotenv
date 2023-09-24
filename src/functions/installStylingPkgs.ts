import { exec } from 'child_process';
import util from 'util';
import { FrameworkProps, ManagerProps } from '../types/index.js';

const installStylingPkgs = async (framework: FrameworkProps, manager: ManagerProps) => {
  const { dependencies, devDependencies } = framework;

  await util.promisify(exec)(
    `${manager.install_command} ${devDependencies} -D`,
    { cwd: './mock' },
  );

  if (framework.dependencies) {
    await util.promisify(exec)(
      `${manager.install_command} ${dependencies}`,
      { cwd: './mock' },
    );
  }
};

export default installStylingPkgs;
