import stripAnsi from 'strip-ansi';
import { Answers, Answer } from '../interfaces/index.js';

const stripedAnswers = {
  npm_init: '',
  ide: '',
  build_tool: '',
  project_type: '',
};

const stripAnswers = (obj: Answer): Answers => {
  Object.entries(obj).forEach((answer) => {
    const [key, value] = answer;

    stripedAnswers[key] = stripAnsi(value);
  });

  return stripedAnswers;
};

export default stripAnswers;
