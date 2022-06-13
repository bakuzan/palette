import hexToRgb from './hexToRgb';
import rgbToCmyk from './rgbToCmyk';

export default function hexToCmyk(hex: string) {
  return rgbToCmyk(hexToRgb(hex));
}
