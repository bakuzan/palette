import hslToRgb from './hslToRgb';
import rgbToCmyk from './rgbToCmyk';

export default function hslToCmyk(hsl: number[]) {
  return rgbToCmyk(hslToRgb(hsl));
}
