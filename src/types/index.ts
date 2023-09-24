type AnswerProps = {
  [key: string]: string | Array<string>
};

type AnswersProps = {
  node: string,
  framework: string,
  ecosystem: string,
  linting: string,
  ide: string,
  styling: Array<string>,
  manager: string
};

type EcosystemProps = {
  linting_pkgs: string,
  eslintrc_path: string,
  tsconfig_path?: string
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
  AnswerProps, AnswersProps, QuestionProps, EcosystemProps, ManagerProps,
};
