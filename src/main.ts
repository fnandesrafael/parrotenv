import inquirer from 'inquirer';

const main = () => {
  inquirer.prompt([{ type: 'list', name: 'ide', choices: ['VS Code', 'Another'] }]);
};

export default main;
