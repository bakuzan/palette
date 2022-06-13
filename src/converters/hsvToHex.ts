import hslToHex from './hslToHex';
import hsvToHsl from './hsvToHsl';

export default function hsvToHex(hsv: number[]) {
  return hslToHex(hsvToHsl(hsv));
}
