#!/usr/bin/env node
import { Command } from 'commander';
import hello from './functions/hello';

const program = new Command();

program
  .version('0.0.0')
  .command('init')
  .description('Initialize ParrotEnv configuration')
  .action(() => {
    hello();
  });

program.parse(process.argv);
