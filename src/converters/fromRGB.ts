import { numberToHex } from './utils/hex';
import { rgbToHue } from './utils/rgb';

export function fromRGBToCMYK(rgba: number[]) {
  const red = rgba[0];
  const green = rgba[1];
  const blue = rgba[2];
  const alpha = rgba[3];

  // BLACK
  if (red === 0 && green === 0 && blue === 0) {
    return [0, 0, 0, 100];
  }

  let c = 1 - red / 255;
  let m = 1 - green / 255;
  let y = 1 - blue / 255;

  const minCMY = Math.min(c, Math.min(m, y));
  c = Math.round(((c - minCMY) / (1 - minCMY)) * 100);
  m = Math.round(((m - minCMY) / (1 - minCMY)) * 100);
  y = Math.round(((y - minCMY) / (1 - minCMY)) * 100);
  const k = Math.round(minCMY * 100);

  const output = [c, m, y, k];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}

export function fromRGBToHex(rgba: number[]) {
  const red = rgba[0];
  const green = rgba[1];
  const blue = rgba[2];
  const alpha = rgba[3];

  const rv = numberToHex(red);
  const gv = numberToHex(green);
  const bv = numberToHex(blue);
  const av = alpha ? numberToHex(Math.floor(alpha * 256)) : null;

  return `#${rv}${gv}${bv}${av ? av : ''}`;
}

export function fromRGBToHSL(rgba: number[]) {
  // make sure rgb are contained in a set of [0, 255]
  const red = rgba[0] / 255;
  const green = rgba[1] / 255;
  const blue = rgba[2] / 255;
  const alpha = rgba[3];

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  const lightnessPercentage = lightness * 100;

  if (max === min) {
    // achromatic
    if (alpha !== undefined) {
      return [0, 0, lightnessPercentage, alpha];
    } else {
      return [0, 0, lightnessPercentage];
    }
  }

  const delta = max - min;
  const saturation =
    (lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)) * 100; // saturation is a percentage

  const hue = rgbToHue(red, green, blue);

  if (alpha !== undefined) {
    return [hue, saturation, lightnessPercentage, alpha];
  }

  return [hue, saturation, lightnessPercentage];
}

export function fromRGBToHSV(rgba: number[]) {
  const red = rgba[0] / 255;
  const green = rgba[1] / 255;
  const blue = rgba[2] / 255;
  const alpha = rgba[3];

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const v = max * 100; // percentage

  const d = max - min;
  const s = (max === 0 ? 0 : d / max) * 100; // percentage
  const h = rgbToHue(red, green, blue);

  const output = [h, s, v];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}

export function fromRGBToHWB(rgba: number[]) {
  const r = rgba[0] / 255;
  const g = rgba[1] / 255;
  const b = rgba[2] / 255;
  const alpha = rgba[3];

  const hwbH = rgbToHue(r, g, b);
  const hwbW = Math.min(r, g, b) * 100; // percentage
  const hwbB = (1 - Math.max(r, b, b)) * 100; // percentage

  const output = [hwbH, hwbW, hwbB];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
