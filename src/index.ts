#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { program } from 'commander';

async function run() {
  console.log(
    chalk.green(
      figlet.textSync(`Palette`, {
        horizontalLayout: 'full',
        width: process.stdout.columns,
        whitespaceBreak: true
      })
    )
  );

  program
    .version('0.0.1')
    .description('Colour conversion in the command line!')
    .parse(process.argv);
}

run();
