#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const hello_1 = __importDefault(require("./functions/hello"));
const program = new commander_1.Command();
program
    .command('init')
    .action(() => {
    (0, hello_1.default)();
});
program.parse(process.argv);
