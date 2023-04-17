const installTsLintingPkgs = async () => {

};

const installPackages = async (project_type) => {
  switch (project_type) {
    case 'TypeScript':
      await installTsLintingPkgs();
      break;

    default:
      break;
  }
};

export default installPackages;
