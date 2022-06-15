import {
  fromRGBToCMYK,
  fromRGBToHex,
  fromRGBToHSV,
  fromRGBToHWB
} from './fromRGB';

const roundOut = (n: number) => Math.min(Math.floor(n * 256), 255);

export function fromHSLToRGB(hsla: number[]) {
  let r = 0,
    g = 0,
    b = 0;

  const h = hsla[0];
  const s = hsla[1] / 100; // percentage
  const l = hsla[2] / 100; // percentage
  const alpha = hsla[3];

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const a = s * Math.min(l, 1 - l);
    const hOver30 = h / 30;

    const k = (n: number) => (n + hOver30) % 12;
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));

    r = f(0);
    g = f(8);
    b = f(4);
  }

  const output = [roundOut(r), roundOut(g), roundOut(b)]; // This won't be correct due to rounding
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}

export function fromHSLToCMYK(hsl: number[]) {
  return fromRGBToCMYK(fromHSLToRGB(hsl));
}

export function fromHSLToHex(hsl: number[]) {
  return fromRGBToHex(fromHSLToRGB(hsl));
}

export function fromHSLToHSV(hsl: number[]) {
  return fromRGBToHSV(fromHSLToRGB(hsl));
}

export function fromHSLToHWB(hsl: number[]) {
  return fromRGBToHWB(fromHSLToRGB(hsl));
}
