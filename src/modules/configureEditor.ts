const configureVsCode = () => {
  console.log('VS Code is being configurated...');
};

const configureEditor = (editor) => {
  switch (editor) {
    case 'VS Code':
      configureVsCode();
      break;

    default:
      break;
  }
};

export default configureEditor;
