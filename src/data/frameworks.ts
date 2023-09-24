const frameworks = {
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
};

export default frameworks;
