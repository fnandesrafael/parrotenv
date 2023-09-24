import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import ecosystems, { EcosystemProps } from '../data/ecosystems.js';
import installLintingPkgs from '../functions/installLintingPkgs.js';
import writeEslintrc from '../functions/writeEslintrc.js';
import writePrettierrc from '../functions/writePrettierrc.js';
import writeTsconfig from '../functions/writeTsConfig.js';

const setupLinting = async (ecosystem: EcosystemProps) => {
  const spinner = createSpinner(
    `Your ${chalk.magentaBright('Linting')} settings are being configured. 🦜 Parrot!`,
  ).start();

  try {
    await installLintingPkgs(ecosystem.linting_pkgs);
    await writePrettierrc();
    await writeEslintrc(ecosystem.eslintrc_path);

    if (ecosystem.tsconfig_path) {
      await writeTsconfig(ecosystem.tsconfig_path);
    }

    spinner.success({
      text: `${chalk.greenBright(`🦜 Parrot! Your ${chalk.magentaBright('Linting')} settings have been configured sucessfully.`)}
      ${chalk.greenBright('+')} The following packages have been added to your project devDependencies: ${chalk.gray(ecosystem.linting_pkgs)}
      ${chalk.greenBright('+')} ".prettierrc.json" file was generated.
      ${chalk.greenBright('+')} ".eslintrc.json" file was generated.
      ${ecosystem.tsconfig_path ? `${chalk.greenBright('+')} "tsconfig.json" file was generated.` : null}`,
    });
  } catch (e) {
    spinner.error({
      text: chalk.red(`The process of setting up your ${chalk.magentaBright('Linting')} settings has failed... 🦜 Parrot...
    \n ${e}`),
    });
    process.exit(1);
  }
};

const handleLinting = async (linting: string, ecosystem: string) => {
  switch (linting) {
    case 'Yes':
      if (ecosystem === 'JavaScript') {
        await setupLinting(ecosystems.javascript);
      } else if (ecosystem === 'React w/ JavaScript') {
        await setupLinting(ecosystems.react_js);
      } else if (ecosystem === 'TypeScript') {
        await setupLinting(ecosystems.typescript);
      } else if (ecosystem === 'React w/ TypeScript') {
        await setupLinting(ecosystems.react_ts);
      } break;

    default:
      break;
  }
};

export default handleLinting;
