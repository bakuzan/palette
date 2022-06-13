function hue2rgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

export default function hslToRgb(hsla: number[]) {
  let r = 0,
    g = 0,
    b = 0;

  const h = hsla[0];
  const s = hsla[1];
  const l = hsla[2];
  const alpha = hsla[3];

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const output = [r * 255, g * 255, b * 255];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
