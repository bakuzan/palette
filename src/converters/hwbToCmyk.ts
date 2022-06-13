import hwbToRgb from './hwbToRgb';
import rgbToCmyk from './rgbToCmyk';

export default function hwbToCmyk(hwb: number[]) {
  return rgbToCmyk(hwbToRgb(hwb));
}
