import chalk from 'chalk';
import { QuestionProps } from '../types/index.js';

const questions: Array<QuestionProps> = [
  {
    name: 'hasNode',
    type: 'list',
    message: `🤔 Have you already initialized a ${chalk.greenBright(
      'node',
    )} project?`,
    choices: ['Yes', 'No'],
  },
  {
    name: 'manager',
    type: 'list',
    message: `📦 Which package manager are you currently using?${chalk.gray(
      '(We strongly recommend that you consider migrating to "bun" due to its remarkable speed and outstanding performance)',
    )}`,
    choices: ['bun', 'yarn', 'npm'],
  },
  {
    name: 'ide',
    type: 'list',
    message: '💻 Which code editor are you using for this project?',
    choices: [chalk.blueBright('VS Code'), chalk.grey('N/A')],
  },
  {
    name: 'bootstrapper',
    type: 'list',
    message: '🛠️  Which framework have you used to bootstrap this project?',
    choices: [chalk.yellow('Vite'), chalk.white('Next'), chalk.grey('N/A')],
  },
  {
    name: 'ecosystem',
    type: 'list',
    message: `🍧 What type of ${chalk.yellow(
      'JavaScript',
    )} project are you aiming for?`,
    choices: [
      chalk.yellow('JavaScript'),
      `React w/ ${chalk.yellow('JavaScript')}`,
      chalk.blue('TypeScript'),
      `React w/ ${chalk.blue('TypeScript')}`,
      chalk.grey('N/A'),
    ],
  },
  {
    name: 'willLint',
    type: 'list',
    message: `🧹 Do you want to configure ${chalk.magentaBright(
      'ESLint',
    )} to lint your code?`,
    choices: ['Yes', 'No'],
  },
  {
    name: 'stylist',
    type: 'list',
    message: `🎨 Perchance your'e planning on writing any ${chalk.blue(
      'CSS',
    )}, which framework/preprocessor/library do you want to set up with a standard ${chalk.magentaBright(
      'Stylelint',
    )} configuration?`,
    choices: [
      chalk.blue('CSS'),
      chalk.magentaBright('SCSS'),
      chalk.magenta('Styled Components'),
      chalk.cyan('Tailwind'),
      chalk.grey('N/A'),
    ],
  },
  {
    name: 'spectator',
    type: 'list',
    message: `🧪 Do you want to setup a ${chalk.greenBright(
      'Test',
    )} framework/library to this project?`,
    choices: [`${chalk.redBright('Jest')} + RTL`, chalk.gray('N/A')],
  },
];

export default questions;
