import {
  fromRGBToCMYK,
  fromRGBToHex,
  fromRGBToHSL,
  fromRGBToHWB
} from './fromRGB';

const roundOut = (n: number) => Math.min(Math.floor(n * 256), 255);

export function fromHSVToRGB(hsva: number[]) {
  let r = 0,
    g = 0,
    b = 0;

  const h = hsva[0];
  const s = hsva[1] / 100; // percentage
  const v = hsva[2] / 100; // percentage
  const alpha = hsva[3];

  if (s == 0) {
    r = g = b = v; // achromatic
  } else {
    const hOver60 = h / 60;

    const k = (n: number) => (n + hOver60) % 6;
    const f = (n: number) =>
      v - v * s * Math.max(0, Math.min(k(n), 4 - k(n), 1));

    r = f(5);
    g = f(3);
    b = f(1);
  }

  const output = [roundOut(r), roundOut(g), roundOut(b)];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}

export function fromHSVToCMYK(hsva: number[]) {
  return fromRGBToCMYK(fromHSVToRGB(hsva));
}

export function fromHSVToHex(hsva: number[]) {
  return fromRGBToHex(fromHSVToRGB(hsva));
}

export function fromHSVToHSL(hsva: number[]) {
  return fromRGBToHSL(fromHSVToRGB(hsva));
}

export function fromHSVToHWB(hsva: number[]) {
  return fromRGBToHWB(fromHSVToRGB(hsva));
}
