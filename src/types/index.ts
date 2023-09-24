type AnswersProps = {
  node: string,
  manager: string
  ide: string,
  bootstraper: string,
  ecosystem: string,
  willLint: string,
  styling: string,
};

type FrameworkProps = {
  additionalCmd?: string,
  configFilePath?: string,
  dependencies?: string,
  devDependencies?: string,
};

type ManagerProps = {
  initCommand: string,
  installCommand: string
};

type QuestionProps = {
  name: string,
  type: string,
  message: string,
  choices: Array<string>
};

export {
  AnswersProps, FrameworkProps, QuestionProps, ManagerProps,
};
