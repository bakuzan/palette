import { colorToHex } from '../utils/toHex';

function reduceHexValue(value: string): string {
  if (
    value.length === 7 &&
    value[1] === value[2] &&
    value[3] === value[4] &&
    value[5] === value[6]
  ) {
    return `#${value[1]}${value[3]}${value[5]}`;
  }
  return value;
}

function convertToHex(
  red: number,
  green: number,
  blue: number,
  alpha?: number
): string {
  const a = alpha !== undefined ? colorToHex(alpha) : '';

  return reduceHexValue(
    `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}${a}`
  );
}

export default function hslToHex(hsla: number[]) {
  const [hue, saturation, lightness, alpha] = hsla;
  if (saturation === 0) {
    // achromatic
    return convertToHex(lightness, lightness, lightness);
  }

  // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
  const huePrime = (hue % 360) / 60;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

  let red = 0;
  let green = 0;
  let blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  const lightnessModification = lightness - chroma / 2;
  const finalRed = red + lightnessModification;
  const finalGreen = green + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return convertToHex(finalRed, finalGreen, finalBlue, alpha);
}
