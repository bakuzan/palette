export const parseHexToDecimal = (h: string) => parseInt(h, 16);

export function numberToHex(value: number): string {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
