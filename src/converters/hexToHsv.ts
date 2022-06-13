import hexToRgb from './hexToRgb';
import rgbToHsv from './rgbToHsv';

export default function hexToHsv(hex: string) {
  return rgbToHsv(hexToRgb(hex));
}
