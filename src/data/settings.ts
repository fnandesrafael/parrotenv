import { SettingsProps } from '../types/index.js';

const settings: SettingsProps = {
  eslint: {
    prettier: {
      configFiles: [
        {
          configFileName: '.prettierrc.json',
          configFilePath: 'lint/.prettierrc.json',
        },
      ],
    },
    javascript: {
      configFiles: [
        {
          configFileName: '.eslintrc.json',
          configFilePath: 'lint/javascript/.eslintrc.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier',
    },
    reactJs: {
      configFiles: [
        {
          configFileName: '.eslintrc.json',
          configFilePath: 'lint/react-js/.eslintrc.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier',
    },
    typescript: {
      configFiles: [
        {
          configFileName: '.eslintrc.json',
          configFilePath: 'lint/typescript/.eslintrc.json',
        },
        {
          configFilePath: 'config/typescript/tsconfig.json',
          configFileName: 'tsconfig.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
    },
    reactTs: {
      configFiles: [
        {
          configFilePath: 'lint/react-ts/.eslintrc.json',
          configFileName: '.eslintrc.json',
        },
        {
          configFilePath: 'config/react-ts/tsconfig.json',
          configFileName: 'tsconfig.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
    },
  },
  stylelint: {
    css: {
      configFiles: [
        {
          configFilePath: 'style/css/.stylelintrc.json',
          configFileName: '.stylelintrc.json',
        },
      ],
      dependencies: '',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order',
    },
    scss: {
      configFiles: [
        {
          configFilePath: 'style/scss/.stylelintrc.json',
          configFileName: '.stylelintrc.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'stylelint stylelint-config-standard stylelint-order sass postcss-scss',
    },
    styledComponents: {
      configFiles: [
        {
          configFilePath: 'style/styled-components/.stylelintrc.json',
          configFileName: '.stylelintrc.json',
        },
      ],
      dependencies: 'styled-components',
      devDependencies:
        'stylelint stylelint-config-standard stylelint-order postcss-styled-components',
    },
    tailwind: {
      additionalCmd: 'npx tailwindcss init -p',
      configFiles: [
        {
          configFilePath: 'style/css/.stylelintrc.json',
          configFileName: '.stylelintrc.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'tailwindcss postcss autoprefixer stylelint stylelint-config-standard stylelint-order',
    },
  },
  test: {
    jestRtl: {
      configFiles: [
        {
          configFilePath: 'config/jest/jest.config.json',
          configFileName: 'jest.config.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom',
    },
  },
};

export default settings;
