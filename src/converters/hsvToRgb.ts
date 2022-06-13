export default function hsvToRgb(hsva: number[]) {
  let r = 0,
    g = 0,
    b = 0;

  const h = hsva[0];
  const s = hsva[1];
  const v = hsva[2];
  const alpha = hsva[3];

  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }

  const output = [r * 255, g * 255, b * 255];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
