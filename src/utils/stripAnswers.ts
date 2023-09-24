import stripAnsi from 'strip-ansi';
import { AnswersProps, AnswerProps } from '../types/index.js';

const stripAnswers = (obj: AnswerProps): AnswersProps => {
  const stripedAnswers: AnswersProps = {
    node: '',
    manager: '',
    tool: '',
    ecosystem: '',
    linting: '',
    ide: '',
    styling: null,
  };

  Object.entries(obj).forEach((answer) => {
    const [key, value] = answer;

    stripedAnswers[key] = stripAnsi(value);
  });

  return stripedAnswers;
};

export default stripAnswers;
