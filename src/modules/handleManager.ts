import managers from '../data/managers';
import { ManagerProps } from '../types/index';

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
