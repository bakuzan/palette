import { ColourFormat } from '../constants/ColourFormat';
import * as RGB from '../converters/fromRGB';
import * as Hex from '../converters/fromHex';
import * as CMYK from '../converters/fromCMYK';
import * as HSL from '../converters/fromHSL';
import * as HSV from '../converters/fromHSV';
import * as HWB from '../converters/fromHWB';

type ConverterFunc =
  | ((input: number[]) => number[])
  | ((input: number[]) => string)
  | ((input: string) => number[]);

const converterMap = new Map([
  [
    ColourFormat.CMYK,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.HSL, CMYK.fromCMYKToHSL],
      [ColourFormat.HSV, CMYK.fromCMYKToHSV],
      [ColourFormat.HWB, CMYK.fromCMYKToHWB],
      [ColourFormat.Hex, CMYK.fromCMYKToHex],
      [ColourFormat.RGB, CMYK.fromCMYKToRGB]
    ])
  ],
  [
    ColourFormat.HSL,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, HSL.fromHSLToCMYK],
      [ColourFormat.HSV, HSL.fromHSLToHSV],
      [ColourFormat.HWB, HSL.fromHSLToHWB],
      [ColourFormat.Hex, HSL.fromHSLToHex],
      [ColourFormat.RGB, HSL.fromHSLToRGB]
    ])
  ],
  [
    ColourFormat.HSV,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, HSV.fromHSVToCMYK],
      [ColourFormat.HSL, HSV.fromHSVToHSL],
      [ColourFormat.HWB, HSV.fromHSVToHWB],
      [ColourFormat.Hex, HSV.fromHSVToHex],
      [ColourFormat.RGB, HSV.fromHSVToRGB]
    ])
  ],
  [
    ColourFormat.HWB,
    new Map<ColourFormat, ConverterFunc>([
      [ColourFormat.CMYK, HWB.fromHWBToCMYK],
      [ColourFormat.HSL, HWB.fromHWBToHSL],
      [ColourFormat.HSV, HWB.fromHWBToHSV],
      [ColourFormat.Hex, HWB.fromHWBToHex],
      [ColourFormat.RGB, HWB.fromHWBToRGB]
    ])
  ],
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
