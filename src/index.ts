#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { program } from 'commander';

import validate from './validate';
import { ColourFormat } from './constants/ColourFormat';
import convert from './convert';
import { enumToName } from './utils';

// make this dynamic or something
const formatsText = `Supported:
CMYK: cmyk(0,0,0,0)
 HSL: hsl(0,0,0)
 HSV: hsv(0,0,0)
 HWB: hwb(0,0,0)
 Hex: #ffffff
 RGB: rgb(0,0,0)`;

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
    .argument(
      '<colour>',
      `A colour value in one of the supported formats.\r\n${formatsText}`
    )
    .action((input) => {
      const response = validate(input);

      if (response === ColourFormat.NotSupported) {
        console.log(
          chalk.red(`Input: `),
          chalk.blueBright(input),
          chalk.red(` is not a supported format.`)
        );
        console.log(formatsText);
      } else {
        const results = convert(response, input);

        for (const result of results) {
          console.log(
            chalk.blueBright(`${enumToName(result.format)}: `),
            result.value
          );
        }
      }
    });

  program.parse(process.argv);
}

run();
