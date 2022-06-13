export default function rgbToHsl(rgba: number[]) {
  // make sure rgb are contained in a set of [0, 255]
  const red = rgba[0] / 255;
  const green = rgba[1] / 255;
  const blue = rgba[2] / 255;
  const alpha = rgba[3];

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (alpha !== undefined) {
      return [0, 0, lightness, alpha];
    } else {
      return [0, 0, lightness];
    }
  }

  let hue: number;
  const delta = max - min;
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    case blue:
    default:
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;
  if (alpha !== undefined) {
    return [hue, saturation, lightness, alpha];
  }
  return [hue, saturation, lightness];
}
