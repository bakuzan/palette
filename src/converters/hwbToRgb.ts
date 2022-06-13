import hslToRgb from './hslToRgb';

export default function hwbToRgb(hwb: number[]) {
  const [hwbH, hwbW, hwbB, alpha] = hwb;
  const [rgbR, rgbG, rgbB] = hslToRgb([hwbH, 100, 50]).map(
    (v) => (v * (100 - hwbW - hwbB)) / 100 + hwbW
  );

  const output = [rgbR, rgbG, rgbB];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
