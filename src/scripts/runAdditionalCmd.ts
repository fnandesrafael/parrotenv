import { exec } from 'child_process';
import util from 'util';

const runAdditionalCmd = async (command: string) => {
  await util.promisify(exec)(
    `${command}`,
    { cwd: './mock' },
  );
};

export default runAdditionalCmd;
