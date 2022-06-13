export default function hslToHsv(hsl: number[]) {
  const [hslH, hslS, hslL, alpha] = hsl;
  const hsv1 = (hslS * (hslL < 50 ? hslL : 100 - hslL)) / 100;
  const hsvS = hsv1 === 0 ? 0 : ((2 * hsv1) / (hslL + hsv1)) * 100;
  const hsvV = hslL + hsv1;

  const output = [hslH, hsvS, hsvV];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
