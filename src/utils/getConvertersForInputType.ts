import { ColourFormat } from '../constants/ColourFormat';
import * as RGB from '../converters/fromRGB';
import * as Hex from '../converters/fromHex';

type ConverterFunc =
  | ((input: number[]) => number[])
  | ((input: number[]) => string)
  | ((input: string) => number[]);

const converterMap = new Map([
  // [
  //   ColourFormat.CMYK,
  //   new Map<ColourFormat, ConverterFunc>([
  //     [ColourFormat.HSL, cmykToHsl],
  //     [ColourFormat.HSV, cmykToHsv],
  //     [ColourFormat.HWB, cmykToHwb],
  //     [ColourFormat.Hex, cmykToHex],
  //     [ColourFormat.RGB, cmykToRgb]
  //   ])
  // ],
  // [
  //   ColourFormat.HSL,
  //   new Map<ColourFormat, ConverterFunc>([
  //     [ColourFormat.CMYK, hslToCmyk],
  //     [ColourFormat.HSV, hslToHsv],
  //     [ColourFormat.HWB, hslToHwb],
  //     [ColourFormat.Hex, hslToHex],
  //     [ColourFormat.RGB, hslToRgb]
  //   ])
  // ],
  // [
  //   ColourFormat.HSV,
  //   new Map<ColourFormat, ConverterFunc>([
  //     [ColourFormat.CMYK, hsvToCmyk],
  //     [ColourFormat.HSL, hsvToHsl],
  //     [ColourFormat.HWB, hsvToHwb],
  //     [ColourFormat.Hex, hsvToHex],
  //     [ColourFormat.RGB, hsvToRgb]
  //   ])
  // ],
  // [
  //   ColourFormat.HWB,
  //   new Map<ColourFormat, ConverterFunc>([
  //     [ColourFormat.CMYK, hwbToCmyk],
  //     [ColourFormat.HSL, hwbToHsl],
  //     [ColourFormat.HSV, hwbToHsv],
  //     [ColourFormat.Hex, hwbToHex],
  //     [ColourFormat.RGB, hwbToRgb]
  //   ])
  // ],
  [
    ColourFormat.Hex,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, Hex.fromHexToCMYK],
      [ColourFormat.HSL, Hex.fromHexToHSL],
      [ColourFormat.HSV, Hex.fromHexToHSV],
      [ColourFormat.HWB, Hex.fromHexToHWB],
      [ColourFormat.RGB, Hex.fromHexToRGB]
    ])
  ],
  [
    ColourFormat.RGB,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, RGB.fromRGBToCMYK],
      [ColourFormat.HSL, RGB.fromRGBToHSL],
      [ColourFormat.HSV, RGB.fromRGBToHSV],
      [ColourFormat.HWB, RGB.fromRGBToHWB],
      [ColourFormat.Hex, RGB.fromRGBToHex]
    ])
  ]
]);

export default function getConvertersForInputType(format: ColourFormat) {
  return converterMap.get(format);
}
