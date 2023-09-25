import stripAnsi from 'strip-ansi';
import { AnswersProps } from '../types/index';

const stripAnswers = (obj: { [key: string]: string }): AnswersProps => {
  const stripedAnswers: AnswersProps = {
    node: '',
    manager: '',
    ide: '',
    bootstrapper: '',
    ecosystem: '',
    willLint: '',
    styling: null,
  };

  Object.entries(obj).forEach((answer) => {
    const [key, value] = answer;

    stripedAnswers[key] = stripAnsi(value);
  });

  return stripedAnswers;
};

export default stripAnswers;
