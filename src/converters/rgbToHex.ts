import { numberToHex } from '../utils/toHex';

export default function rgbToHex(rgba: number[]) {
  const red = rgba[0];
  const green = rgba[1];
  const blue = rgba[2];
  const alpha = rgba[3];

  const rv = numberToHex(red);
  const gv = numberToHex(green);
  const bv = numberToHex(blue);
  const av = alpha ? numberToHex(Math.floor(alpha * 256)) : null;

  return `#${rv}${gv}${bv}${av ? av : ''}`;
}
