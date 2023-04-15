import stripAnsi from 'strip-ansi';

const stripAnswers = (list: Array<string>): Array<string> => {
  const stripedAnswers = list.map((answer: string) => stripAnsi(answer));
  return stripedAnswers;
};

export default stripAnswers;
