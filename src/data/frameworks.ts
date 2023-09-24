const frameworks = {
  lint: {
    prettier: {
      configFilePath: 'lint/.prettierrc.json',
    },
    eslint: {
      javascript: {
        configFilePath: 'lint/javascript/.eslintrc.json',
        dependencies: '',
        devDependencies: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier',
      },
      reactJs: {
        configFilePath: 'lint/react-js/.eslintrc.json',
        dependencies: '',
        devDependencies: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier',
      },
      typescript: {
        configFilePath: 'lint/typescript/.eslintrc.json',
        dependencies: '',
        devDependencies: 'typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
      },
      reactTs: {
        configFilePath: 'lint/react-ts/.eslintrc.json',
        dependencies: '',
        devDependencies: 'eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
      },
    },
  },
  style: {
    css: {
      configFilePath: 'style/css/.stylelintrc.json',
      dependencies: '',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order',
    },
    scss: {
      configFilePath: 'style/scss/.stylelintrc.json',
      dependencies: '',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order sass postcss-scss',
    },
    styledComponents: {
      configFilePath: 'style/styled-components/.stylelintrc.json',
      dependencies: 'styled-components',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order postcss-styled-components',
    },
    tailwind: {
      additionalCmd: 'npx tailwindcss init -p',
      configFilePath: 'style/css/.stylelintrc.json',
      dependencies: '',
      devDependencies: 'tailwindcss postcss autoprefixer stylelint stylelint-config-standard stylelint-order',
    },
  },
};

export default frameworks;
