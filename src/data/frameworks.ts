const frameworks = {
  lint: {
    prettier: {
      configFilePath: 'lint/.prettierrc.json',
    },
    eslint: {
      javascript: {
        dependencies: '',
        devDependencies: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier',
        configFilePath: 'lint/javascript/.eslintrc.json',
      },
      reactJs: {
        dependencies: '',
        devDependencies: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier',
        configFilePath: 'lint/react-js/.eslintrc.json',
      },
      typescript: {
        dependencies: '',
        devDependencies: 'typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
        configFilePath: 'lint/typescript/.eslintrc.json',
      },
      reactTs: {
        dependencies: '',
        devDependencies: 'eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
        configFilePath: 'lint/react-ts/.eslintrc.json',
      },
    },
  },
  style: {
    css: {
      dependencies: '',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order',
      configFilePath: 'style/css/.stylelintrc.json',
    },
    scss: {
      dependencies: '',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order sass postcss-scss',
      configFilePath: 'style/scss/.stylelintrc.json',
    },
    styledComponents: {
      dependencies: 'styled-components',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order postcss-styled-components',
      configFilePath: 'style/styled-components/.stylelintrc.json',
    },
    tailwind: {
      dependencies: '',
      devDependencies: '',
      configFilePath: '',
    },
  },
};

export default frameworks;
