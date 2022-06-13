import hslToHsv from './hslToHsv';
import hsvToHwb from './hsvToHwb';

export default function hslToHwb(hsl: number[]) {
  return hsvToHwb(hslToHsv(hsl));
}
