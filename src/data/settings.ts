import { SettingsProps } from '../types/index.js';

const settings: SettingsProps = {
  editors: {
    vscode: {
      configFiles: [
        {
          configFilePath: 'ide/vscode/.editorconfig',
          configFileName: '.editorconfig',
        },
        {
          configFilePath: 'ide/vscode/.vscode',
          configFileName: '.vscode',
        },
        {
          configFileName: '.prettierrc.json',
          configFilePath: 'lint/.prettierrc.json',
        },
      ],
      devDependencies: 'prettier',
    },
  },
  linters: {
    eslintJs: {
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
    eslintReactJs: {
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
    eslintTs: {
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
    eslintReactTs: {
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
  stylists: {
    stylelintCss: {
      configFiles: [
        {
          configFilePath: 'style/css/.stylelintrc.json',
          configFileName: '.stylelintrc.json',
        },
      ],
      dependencies: '',
      devDependencies: 'stylelint stylelint-config-standard stylelint-order',
    },
    stylelintScss: {
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
    stylelintSc: {
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
    stylelintTailwind: {
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
  spectators: {
    jestRtl: {
      configFiles: [
        {
          configFilePath: 'config/jest/jest.config.json',
          configFileName: 'jest.config.json',
        },
        {
          configFilePath: 'config/babel/babel.config.json',
          configFileName: 'babel.config.json',
        },
      ],
      dependencies: '',
      devDependencies:
        'jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom',
    },
  },
  bootstrappers: {
    viteJs: {
      configFiles: [
        {
          configFileName: 'vite.config.js',
          configFilePath: 'config/vite/vite.config.js',
        },
      ],
    },
    viteTs: {
      configFiles: [
        {
          configFileName: 'vite.config.ts',
          configFilePath: 'config/vite/vite.config.ts',
        },
      ],
    },
  },
};

export default settings;
