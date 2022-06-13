export function numberToHex(value: number): string {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export function colorToHex(color: number): string {
  return numberToHex(Math.round(color * 255));
}
