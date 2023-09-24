type AnswersProps = {
  node: string,
  tool: string,
  ecosystem: string,
  willLint: string,
  ide: string,
  styling: string,
  manager: string
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
