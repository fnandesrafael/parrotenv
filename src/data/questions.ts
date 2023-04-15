import chalk from 'chalk';

const questions = [
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
