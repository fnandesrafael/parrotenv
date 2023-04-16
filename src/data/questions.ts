import chalk from 'chalk';

const questions = [
  {
    name: 'npm_init',
    type: 'list',
    message: `🤔 Have you already initialized a ${chalk.greenBright('node')} project?`,
    choices: ['Yes', 'No'],
  },
  {
    name: 'build_tool',
    type: 'list',
    message: '🛠️  Which build tool have you used to create this project?',
    choices: [
      chalk.yellow('Vite'),
      'Another',
    ],
  },
  {
    name: 'project_type',
    type: 'list',
    message: `🍧 What type of ${chalk.yellow('JavaScript')} project are you developing?`,
    choices: [
      chalk.yellow('JavaScript'),
      `React w/ ${chalk.yellow('JavaScript')}`,
      chalk.blue('TypeScript'),
    ],
  },
  {
    name: 'linting',
    type: 'list',
    message: `🧹 Do you want to configure ${chalk.magentaBright('ESLint')} and ${chalk.magentaBright('Prettier')} to lint and format your code?`,
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
  {
    name: 'stylelint',
    type: 'list',
    message: `🎨 Perchance your'e planning on writing any ${chalk.blue('CSS')}, would you like to set up a standard linting configuration with ${chalk.magentaBright('Stylelint')}?`,
    choices: ['Yes', 'No'],
  },
];

export default questions;
