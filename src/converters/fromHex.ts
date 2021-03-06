import {
  hexRegex,
  hexaRegex,
  reducedHexRegex,
  reducedHexaRegex
} from '../constants/regexes';
import PaletteError from '../utils/error';

import { parseHexToDecimal } from './utils/hex';
import {
  fromRGBToCMYK,
  fromRGBToHSL,
  fromRGBToHSV,
  fromRGBToHWB
} from './fromRGB';

export function fromHexToRGB(hex: string) {
  if (hex.match(hexRegex)) {
    return [
      parseHexToDecimal(hex.substr(1, 2)),
      parseHexToDecimal(hex.substr(3, 2)),
      parseHexToDecimal(hex.substr(5, 2))
    ];
  }

  if (hex.match(hexaRegex)) {
    const alpha = parseFloat((parseInt(hex.substr(7, 2), 16) / 255).toFixed(2));

    return [
      parseHexToDecimal(hex.substr(1, 2)),
      parseHexToDecimal(hex.substr(3, 2)),
      parseHexToDecimal(hex.substr(5, 2)),
      alpha
    ];
  }

  if (hex.match(reducedHexRegex)) {
    return hex
      .slice(1)
      .split('')
      .map((x) => parseHexToDecimal(x.repeat(2)));
  }

  if (hex.match(reducedHexaRegex)) {
    const alpha = parseFloat(
      (parseInt(hex.slice(-1).repeat(2), 16) / 255).toFixed(2)
    );

    return [
      ...hex
        .slice(1, -1)
        .split('')
        .map((x) => parseHexToDecimal(x.repeat(2))),
      alpha
    ];
  }

  throw new PaletteError(1);
}

export function fromHexToCMYK(hex: string) {
  return fromRGBToCMYK(fromHexToRGB(hex));
}

export function fromHexToHSL(hex: string) {
  return fromRGBToHSL(fromHexToRGB(hex));
}

export function fromHexToHSV(hex: string) {
  return fromRGBToHSV(fromHexToRGB(hex));
}

export function fromHexToHWB(hex: string) {
  return fromRGBToHWB(fromHexToRGB(hex));
}
