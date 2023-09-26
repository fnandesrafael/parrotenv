type AnswersProps = {
  node: string;
  manager: string;
  ide: string;
  bootstrapper: string;
  ecosystem: string;
  willLint: string;
  styling: string;
  testing: string;
};

type FrameworkProps = {
  additionalCmd?: string;
  configFiles?: Array<{ configFileName: string; configFilePath: string }>;
  dependencies?: string;
  devDependencies?: string;
};

type ManagerProps = {
  initCommand: string;
  installCommand: string;
};

type QuestionProps = {
  name: string;
  type: string;
  message: string;
  choices: Array<string>;
};

type SettingsProps = {
  [key: string]: { [key: string]: FrameworkProps };
};

export {
  AnswersProps,
  FrameworkProps,
  ManagerProps,
  QuestionProps,
  SettingsProps,
};
