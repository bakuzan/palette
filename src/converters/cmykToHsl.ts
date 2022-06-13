import cmykToRgb from './cmykToRgb';
import rgbToHsl from './rgbToHsl';

export default function cmykToHsl(cmyk: number[]) {
  return rgbToHsl(cmykToRgb(cmyk));
}
