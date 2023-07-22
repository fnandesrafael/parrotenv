import stripAnsi from 'strip-ansi';
import { Answers, Answer } from '../types/index.js';

const stripAnswers = (obj: Answer): Answers => {
  const stripedAnswers: Answers = {
    node: '',
    framework: '',
    ecosystem: '',
    linting: '',
    ide: '',
    styling: null,
  };

  Object.entries(obj).forEach((answer) => {
    const [key, value] = answer;

    if (typeof value === 'string') {
      stripedAnswers[key] = stripAnsi(value);
    } else if (Array.isArray(value)) {
      stripedAnswers[key] = value.map((item) => stripAnsi(item));
    }
  });

  return stripedAnswers;
};

export default stripAnswers;
