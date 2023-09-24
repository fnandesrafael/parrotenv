const handleNode = async (hasInit: string): Promise<boolean> => {
  switch (hasInit) {
    case 'Yes':
      return true;

    case 'No':
      return false;

    default:
      return false;
  }
};

export default handleNode;
