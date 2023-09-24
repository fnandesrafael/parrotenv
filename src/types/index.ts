type AnswerProps = {
  [key: string]: string
};

type AnswersProps = {
  node: string,
  tool: string,
  ecosystem: string,
  linting: string,
  ide: string,
  styling: string,
  manager: string
};

type EcosystemProps = {
  lintingPkgs: string,
  eslintrcPath: string,
  tsconfigPath?: string
};

type FrameworkProps = {
  dependencies?: string,
  devDependencies: string,
  configFilePath?: string
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
  AnswerProps, AnswersProps, EcosystemProps, FrameworkProps, QuestionProps, ManagerProps,
};
