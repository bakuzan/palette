import { ColourFormat } from './constants/ColourFormat';
import {
  hexRegex,
  hexaRegex,
  reducedHexRegex,
  reducedHexaRegex,
  digitRegex
} from './constants/regexes';

const hexRegexes = [hexRegex, hexaRegex, reducedHexRegex, reducedHexaRegex];

export default function validate(input: string) {
  const str = input.trim();

  if (hexRegexes.some((r) => str.match(r))) {
    return ColourFormat.Hex;
  }

  // todo : digit limit validation
  if (str.match(/^cmyk/) && str.slice(4).match(digitRegex)) {
    return ColourFormat.CMYK;
  }

  if (str.match(/^hsl/) && str.slice(3).match(digitRegex)) {
    return ColourFormat.HSL;
  }

  if (str.match(/^hsv/) && str.slice(3).match(digitRegex)) {
    return ColourFormat.HSV;
  }

  // if (str.match(/^hwb/) && str.slice(3).match(digitRegex)) {
  //   return ColourFormat.HWB;
  // }

  if (str.match(/^rgb/) && str.slice(3).match(digitRegex)) {
    return ColourFormat.RGB;
  }

  return ColourFormat.NotSupported;
}
