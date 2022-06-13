import { ColourFormat } from '../constants/ColourFormat';
import cmykToHex from '../converters/cmykToHex';
import cmykToHsl from '../converters/cmykToHsl';
import cmykToHsv from '../converters/cmykToHsv';
import cmykToHwb from '../converters/cmykToHwb';
import cmykToRgb from '../converters/cmykToRgb';
import hexToCmyk from '../converters/hexToCmyk';
import hexToHsl from '../converters/hexToHsl';
import hexToHsv from '../converters/hexToHsv';
import hexToHwb from '../converters/hexToHwb';
import hexToRgb from '../converters/hexToRgb';
import hslToCmyk from '../converters/hslToCmyk';
import hslToHex from '../converters/hslToHex';
import hslToHsv from '../converters/hslToHsv';
import hslToHwb from '../converters/hslToHwb';
import hslToRgb from '../converters/hslToRgb';
import hsvToCmyk from '../converters/hsvToCmyk';
import hsvToHex from '../converters/hsvToHex';
import hsvToHsl from '../converters/hsvToHsl';
import hsvToHwb from '../converters/hsvToHwb';
import hsvToRgb from '../converters/hsvToRgb';
import hwbToCmyk from '../converters/hwbToCmyk';
import hwbToHex from '../converters/hwbToHex';
import hwbToHsl from '../converters/hwbToHsl';
import hwbToHsv from '../converters/hwbToHsv';
import hwbToRgb from '../converters/hwbToRgb';
import rgbToCmyk from '../converters/rgbToCmyk';
import rgbToHex from '../converters/rgbToHex';
import rgbToHsl from '../converters/rgbToHsl';
import rgbToHsv from '../converters/rgbToHsv';
import rgbToHwb from '../converters/rgbToHwb';

type ConverterFunc =
  | ((input: number[]) => number[])
  | ((input: number[]) => string)
  | ((input: string) => number[]);

const converterMap = new Map([
  [
    ColourFormat.CMYK,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.HSL, cmykToHsl],
      [ColourFormat.HSV, cmykToHsv],
      [ColourFormat.HWB, cmykToHwb],
      [ColourFormat.Hex, cmykToHex],
      [ColourFormat.RGB, cmykToRgb]
    ])
  ],
  [
    ColourFormat.HSL,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, hslToCmyk],
      [ColourFormat.HSV, hslToHsv],
      [ColourFormat.HWB, hslToHwb],
      [ColourFormat.Hex, hslToHex],
      [ColourFormat.RGB, hslToRgb]
    ])
  ],
  [
    ColourFormat.HSV,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, hsvToCmyk],
      [ColourFormat.HSL, hsvToHsl],
      [ColourFormat.HWB, hsvToHwb],
      [ColourFormat.Hex, hsvToHex],
      [ColourFormat.RGB, hsvToRgb]
    ])
  ],
  [
    ColourFormat.HWB,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, hwbToCmyk],
      [ColourFormat.HSL, hwbToHsl],
      [ColourFormat.HSV, hwbToHsv],
      [ColourFormat.Hex, hwbToHex],
      [ColourFormat.RGB, hwbToRgb]
    ])
  ],
  [
    ColourFormat.Hex,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, hexToCmyk],
      [ColourFormat.HSL, hexToHsl],
      [ColourFormat.HSV, hexToHsv],
      [ColourFormat.HWB, hexToHwb],
      [ColourFormat.RGB, hexToRgb]
    ])
  ],
  [
    ColourFormat.RGB,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, rgbToCmyk],
      [ColourFormat.HSL, rgbToHsl],
      [ColourFormat.HSV, rgbToHsv],
      [ColourFormat.HWB, rgbToHwb],
      [ColourFormat.Hex, rgbToHex]
    ])
  ]
]);

export default function getConvertersForInputType(format: ColourFormat) {
  return converterMap.get(format);
}
