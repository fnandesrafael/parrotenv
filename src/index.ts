#!/usr/bin/env node
import { Command } from 'commander';
import hello from './functions/hello';

const program = new Command();

program
  .command('init')
  .action(() => {
    hello();
  });

program.parse(process.argv);
