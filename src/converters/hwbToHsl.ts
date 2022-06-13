import hsvToHsl from './hsvToHsl';
import hwbToHsv from './hwbToHsv';

export default function hwbToHsl(hwb: number[]) {
  return hsvToHsl(hwbToHsv(hwb));
}
