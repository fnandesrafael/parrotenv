const verifyNode = async (hasInit: string): Promise<boolean> => {
  switch (hasInit) {
    case 'Yes':
      return true;
      break;

    case 'No':
      return false;
      break;

    default:
      return false;
      break;
  }
};

export default verifyNode;
