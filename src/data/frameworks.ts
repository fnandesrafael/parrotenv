const frameworks = {
  lint: {
    prettier: {
      configFilePath: 'editors/.prettierrc.json',
    },
    eslint: {
      javascript: {
        devDependencies: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier',
        configFilePath: 'linters/javascript/.eslintrc.json',
      },
      reactJs: {
        devDependencies: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier',
        configFilePath: 'linters/react-js/.eslintrc.json',
      },
      typescript: {
        devDependencies: 'typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
        configFilePath: 'linters/typescript/.eslintrc.json',
      },
      reactTs: {
        devDependencies: 'eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
        configFilePath: 'linters/react-ts/.eslintrc.json',
      },
    },
  },
  styling: {
    css: {
      devDependencies: 'stylelint stylelint-config-standard stylelint-order',
      configFilePath: 'css/.stylelintrc.json',
    },
    scss: {
      devDependencies: 'stylelint stylelint-config-standard stylelint-order sass postcss-scss',
      configFilePath: 'scss/.stylelintrc.json',
    },
    styledComponents: {
      dependencies: 'styled-components',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order postcss-styled-components',
      configFilePath: 'styled-components/.stylelintrc.json',
    },
    tailwind: {
      devDependencies: '',
      configFilePath: '',
    },
  },
};

export default frameworks;
