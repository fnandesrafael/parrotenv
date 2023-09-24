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
  linting_pkgs: string,
  eslintrc_path: string,
  tsconfig_path?: string
};

type FrameworkProps = {
  dependencies?: string,
  devDependencies: string,
  configFilePath?: string
};

type ManagerProps = {
  init_command: string,
  install_command: string
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
