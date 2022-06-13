import hexToRgb from './hexToRgb';
import rgbToHwb from './rgbToHwb';

export default function hexToHwb(hex: string) {
  return rgbToHwb(hexToRgb(hex));
}
