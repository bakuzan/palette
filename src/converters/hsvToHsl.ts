export default function hsvToHsl(hsv: number[]) {
  const [hsvH, hsvS, hsvV, alpha] = hsv;
  const hslL = ((200 - hsvS) * hsvV) / 100;

  const [hslS, hslV] = [
    hslL === 0 || hslL === 200
      ? 0
      : ((hsvS * hsvV) / 100 / (hslL <= 100 ? hslL : 200 - hslL)) * 100,
    (hslL * 5) / 10
  ];

  const output = [hsvH, hslS, hslV];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
