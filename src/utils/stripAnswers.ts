import stripAnsi from 'strip-ansi';
import { AnswersProps } from '../types/index.js';

const stripAnswers = (obj: { [key: string]: string }): AnswersProps => {
  const stripedAnswers: AnswersProps = {
    hasNode: '',
    manager: '',
    ide: '',
    bootstrapper: '',
    ecosystem: '',
    willLint: '',
    stylist: '',
    spectator: '',
  };

  Object.entries(obj).forEach((answer) => {
    const [key, value] = answer;

    stripedAnswers[key] = stripAnsi(value);
  });

  return stripedAnswers;
};

export default stripAnswers;
