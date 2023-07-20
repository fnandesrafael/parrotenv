import chalk from 'chalk';
import Question from '../types/Question.js';

const questions: Array<Question> = [
  {
    name: 'node',
    type: 'list',
    message: `🤔 Have you already initialized a ${chalk.greenBright('node')} project?`,
    choices: ['Yes', 'No'],
  },
  {
    name: 'framework',
    type: 'list',
    message: '🛠️  Which build tool have you used to bootstrap this project?',
    choices: [
      chalk.yellow('Vite'),
      'Next',
      chalk.grey('N/A'),
    ],
  },
  {
    name: 'ecosystem',
    type: 'list',
    message: `🍧 What type of ${chalk.yellow('JavaScript')} project are you aiming for?`,
    choices: [
      chalk.yellow('JavaScript'),
      `React + ${chalk.yellow('JavaScript')}`,
      chalk.blue('TypeScript'),
      `React + ${chalk.blue('TypeScript')}`,
      chalk.grey('N/A'),
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
      chalk.grey('N/A'),
    ],
  },
  {
    name: 'styling',
    type: 'checkbox',
    message: `🎨 Perchance your'e planning on writing any ${chalk.blue('CSS')}, which frameworkd/preprocessor/library do you want to set up with a standard ${chalk.magentaBright('Stylelint')} configuration?`,
    choices: [
      chalk.blue('CSS'),
      chalk.magentaBright('SCSS'),
      chalk.magenta('Styled Components'),
      chalk.grey('N/A'),
    ],
  },
];

export default questions;
