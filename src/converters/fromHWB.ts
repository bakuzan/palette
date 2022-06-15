import { fromHSLToRGB } from './fromHSL';
import {
  fromRGBToCMYK,
  fromRGBToHex,
  fromRGBToHSL,
  fromRGBToHSV
} from './fromRGB';

export function fromHWBToRGB(hwb: number[]) {
  const [hwbH, hwbW, hwbB, alpha] = hwb;
  const delta = 100 - hwbW - hwbB;

  // this is inaccurate because fromHSLToRGB is inaccurate
  const [rgbR, rgbG, rgbB] = fromHSLToRGB([hwbH, 100, 50]).map(
    (v) => (v * delta) / 100 + hwbW
  );

  const output = [rgbR, rgbG, rgbB];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}

export function fromHWBToCMYK(hwb: number[]) {
  return fromRGBToCMYK(fromHWBToRGB(hwb));
}

export function fromHWBToHex(hwb: number[]) {
  return fromRGBToHex(fromHWBToRGB(hwb));
}

export function fromHWBToHSL(hwb: number[]) {
  return fromRGBToHSL(fromHWBToRGB(hwb));
}

export function fromHWBToHSV(hwb: number[]) {
  return fromRGBToHSV(fromHWBToRGB(hwb));
}
