import chalk from 'chalk';

const questions = [
  {
    name: 'npm_init',
    type: 'list',
    message: '🤔 Have you already initialized a node project with "npm init -y" command?',
    choices: ['Yes', 'No'],
  },
  {
    name: 'ide',
    type: 'list',
    message: '💻 Which code editor are you using for this project?',
    choices: [
      chalk.blueBright('VS Code'),
      'Another',
    ],
  },
];

export default questions;
