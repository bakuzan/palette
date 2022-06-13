import hwbToRgb from './hwbToRgb';
import rgbToHex from './rgbToHex';

export default function hwbToHex(hwb: number[]) {
  return rgbToHex(hwbToRgb(hwb));
}
