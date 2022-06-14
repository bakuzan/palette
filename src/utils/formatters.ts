import { ColourFormat } from '../constants/ColourFormat';
import PaletteError from './error';
import { enumToName } from './index';

const findDigitsIncludingDecimals = /\d+(\.\d+)?/g;

export function toNumberArray(colourStr: string) {
  const matches = colourStr.match(findDigitsIncludingDecimals);
  if (!matches) {
    throw new PaletteError(2);
  }

  return matches.map(Number);
}

export function toStringFormat(format: ColourFormat, value: number[] | string) {
  if (typeof value === 'string') {
    return value;
  }

  const pre = enumToName(format).toLowerCase();
  const colour = value.map(Math.round).join(',');
  // todo include % signs where necessary
  return `${pre}(${colour})`;
}
