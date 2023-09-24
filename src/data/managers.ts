const managers = {
  npm: {
    init_command: 'npm init -y',
    install_command: 'npm install',
  },
  yarn: {
    init_command: 'yarn init -y',
    install_command: 'yarn add',
  },
  bun: {
    init_command: 'bun init -y',
    install_command: 'bun install',
  },
};

export default managers;
