#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .version('0.0.0')
    .command('init')
    .description('Initialize ParrotEnv configuration')
    .action(() => {
    console.log('Hello ParrotEnv');
});
program.parse(process.argv);
