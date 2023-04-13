#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.0')
  .command('init')
  .description('Initialize ParrotEnv configuration')
  .action(() => {
    console.log('Hello ParrotEnv');
  });

program.parse(process.argv);
