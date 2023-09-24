import managers from '../data/managers.js';
import { ManagerProps } from '../types/index.js';

const handleManager = async (manager: string): Promise<ManagerProps> => {
  switch (manager) {
    case 'npm':
      return managers.npm;

    case 'yarn':
      return managers.yarn;

    case 'bun':
      return managers.bun;

    default:
      return managers.npm;
  }
};

export default handleManager;
