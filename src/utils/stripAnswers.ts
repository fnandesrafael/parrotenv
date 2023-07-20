import stripAnsi from 'strip-ansi';
import { Answers, Answer } from '../types/index.js';

const stripAnswers = (obj: Answer): Answers => {
  const stripedAnswers = {
    node: '',
    framework: '',
    project: '',
    linting: '',
    ide: '',
    styling: '',
  };

  Object.entries(obj).forEach((answer) => {
    const [key, value] = answer;

    stripedAnswers[key] = stripAnsi(value);
  });

  return stripedAnswers;
};

export default stripAnswers;
