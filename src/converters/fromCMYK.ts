import {
  fromRGBToHex,
  fromRGBToHSL,
  fromRGBToHSV,
  fromRGBToHWB
} from './fromRGB';

export function fromCMYKToRGB(cmyk: number[]) {
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;
  const a = cmyk[4];

  let r = 1 - Math.min(1, c * (1 - k) + k);
  let g = 1 - Math.min(1, m * (1 - k) + k);
  let b = 1 - Math.min(1, y * (1 - k) + k);

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  const output = [r, g, b];
  if (a !== undefined) {
    output.push(a);
  }

  return output;
}

export function fromCMYKToHex(cmyk: number[]) {
  return fromRGBToHex(fromCMYKToRGB(cmyk));
}

export function fromCMYKToHSL(cmyk: number[]) {
  return fromRGBToHSL(fromCMYKToRGB(cmyk));
}

export function fromCMYKToHSV(cmyk: number[]) {
  return fromRGBToHSV(fromCMYKToRGB(cmyk));
}

export function fromCMYKToHWB(cmyk: number[]) {
  return fromRGBToHWB(fromCMYKToRGB(cmyk));
}
