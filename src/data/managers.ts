const managers = {
  npm: {
    initCommand: 'npm init -y',
    installCommand: 'npm install',
  },
  yarn: {
    initCommand: 'yarn init -y',
    installCommand: 'yarn add',
  },
  bun: {
    initCommand: 'bun init -y',
    installCommand: 'bun install',
  },
};

export default managers;
