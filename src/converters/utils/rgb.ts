export function rgbToHue(red: number, green: number, blue: number) {
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  if (max == min) {
    return 0; // achromatic
  }

  const delta = max - min;

  let hue: number;
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

  return hue * 60;
}
