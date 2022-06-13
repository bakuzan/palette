import cmykToRgb from './cmykToRgb';
import rgbToHex from './rgbToHex';

export default function cmykToHex(cmyk: number[]) {
  return rgbToHex(cmykToRgb(cmyk));
}
