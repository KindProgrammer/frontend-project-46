#!/usr/bin/env node

import { program } from 'commander';

const gendiff = () => {
    program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')

    program  
    .argument('<filepath1>', 'First file address')
    .argument('<filepath2>', 'Second file address')
    .option('-f ,--format <type>', 'output format')

    program.parse(process.argv);
}

gendiff()