export default function hsvToHwb(hsv: number[]) {
  const [hsvH, hsvS, hsvV, alpha] = hsv;
  const [hwbH, hwbW, hwbB] = [hsvH, ((100 - hsvS) * hsvV) / 100, 100 - hsvV];

  const output = [hwbH, hwbW, hwbB];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
