function rgbToValue(...rgb: number[]) {
  return Math.max(...rgb);
}

function rgbToWhiteness(...rgb: number[]) {
  return Math.min(...rgb);
}

function rgbToHue(rgbR: number, rgbG: number, rgbB: number) {
  const value = rgbToValue(rgbR, rgbG, rgbB);
  const whiteness = rgbToWhiteness(rgbR, rgbG, rgbB);
  const delta = value - whiteness;

  if (delta) {
    // calculate segment
    const segment =
      value === rgbR
        ? (rgbG - rgbB) / delta
        : value === rgbG
        ? (rgbB - rgbR) / delta
        : (rgbR - rgbG) / delta;

    // calculate shift
    const shift =
      value === rgbR
        ? segment < 0
          ? 360 / 60
          : 0 / 60
        : value === rgbG
        ? 120 / 60
        : 240 / 60;

    // calculate hue
    return (segment + shift) * 60;
  } else {
    // fallback case
    return 0;
  }
}

export default function rgbToHwb(rgba: number[]) {
  const [rgbR, rgbG, rgbB, alpha] = rgba;
  const hwbH = rgbToHue(rgbR, rgbG, rgbB);
  const hwbW = rgbToWhiteness(rgbR, rgbG, rgbB);
  const hwbV = rgbToValue(rgbR, rgbG, rgbB);
  const hwbB = 100 - hwbV;

  const output = [hwbH, hwbW, hwbB];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
