import cmykToRgb from './cmykToRgb';
import rgbToHwb from './rgbToHwb';

export default function cmykToHwb(cmyk: number[]) {
  return rgbToHwb(cmykToRgb(cmyk));
}
