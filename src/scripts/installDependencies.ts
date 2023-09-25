import { exec } from 'child_process';
import util from 'util';
import { ManagerProps, FrameworkProps } from '../types/index.js';

const installDependencies = async (
  framework: FrameworkProps,
  manager: ManagerProps,
) => {
  const { dependencies, devDependencies } = framework;

  await util.promisify(exec)(
    `${manager.installCommand} ${devDependencies} -D`,
    { cwd: './mock' },
  );

  if (dependencies) {
    await util.promisify(exec)(`${manager.installCommand} ${dependencies}`, {
      cwd: './mock',
    });
  }
};

export default installDependencies;
