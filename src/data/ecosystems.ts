const ecosystems = {
  javascript: {
    lintingPkgs: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier',
    eslintrcPath: 'javascript/.eslintrc.json',
  },
  react_js: {
    lintingPkgs: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier',
    eslintrcPath: 'react-js/.eslintrc.json',
  },
  typescript: {
    lintingPkgs: 'typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
    eslintrcPath: 'typescript/.eslintrc.json',
    tsconfigPath: 'typescript/tsconfig.json',
  },
  react_ts: {
    lintingPkgs: 'eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
    eslintrcPath: 'react-ts/.eslintrc.json',
    tsconfigPath: 'react-ts/tsconfig.json',
  },
};

export default ecosystems;
