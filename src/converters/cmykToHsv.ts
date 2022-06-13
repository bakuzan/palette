import cmykToRgb from './cmykToRgb';
import rgbToHsv from './rgbToHsv';

export default function cmykToHsl(cmyk: number[]) {
  return rgbToHsv(cmykToRgb(cmyk));
}
