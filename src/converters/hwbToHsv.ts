export default function hwbToHsv(hwb: number[]) {
  const [hwbH, hwbW, hwbB, alpha] = hwb;
  const [hsvH, hsvS, hsvV] = [
    hwbH,
    hwbB === 100 ? 0 : 100 - (hwbW / (100 - hwbB)) * 100,
    100 - hwbB
  ];

  const output = [hsvH, hsvS, hsvV];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}
