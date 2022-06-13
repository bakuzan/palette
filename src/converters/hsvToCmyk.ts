import hsvToRgb from './hsvToRgb';
import rgbToCmyk from './rgbToCmyk';

export default function hsvToCmyk(hsv: number[]) {
  return rgbToCmyk(hsvToRgb(hsv));
}
