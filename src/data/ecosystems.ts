const ecosystems = {
  javascript: {
    linting_pkgs: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier',
    eslintrc_path: 'javascript/.eslintrc.json',
  },
  react_js: {
    linting_pkgs: 'eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier',
    eslintrc_path: 'react-js/.eslintrc.json',
  },
  typescript: {
    linting_pkgs: 'typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
    eslintrc_path: 'typescript/.eslintrc.json',
    tsconfig_path: 'typescript/tsconfig.json',
  },
  react_ts: {
    linting_pkgs: 'eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier',
    eslintrc_path: 'react-ts/.eslintrc.json',
    tsconfig_path: 'react-ts/tsconfig.json',
  },
};

export default ecosystems;
