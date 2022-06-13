export default function rgbToCmyk(rgba: number[]) {
  const red = rgba[0];
  const green = rgba[1];
  const blue = rgba[2];
  const alpha = rgba[3];

  // BLACK
  if (red === 0 && green === 0 && blue === 0) {
    return [0, 0, 0, 1];
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
