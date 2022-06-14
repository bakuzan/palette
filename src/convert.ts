import { ColourFormat } from './constants/ColourFormat';
import { ColourValue } from './types/ColourValue';

import PaletteError from './utils/error';
import getConvertersForInputType from './utils/getConvertersForInputType';
import { toNumberArray, toStringFormat } from './utils/formatters';

export default function convert(format: ColourFormat, raw: string) {
  const results: ColourValue[] = [];
  results.push({ format, value: raw, isInput: true });

  const converters = getConvertersForInputType(format);
  if (!converters) {
    throw new PaletteError(999);
  }

  const input = format === ColourFormat.Hex ? raw : toNumberArray(raw);

  for (const [key, conv] of converters) {
    const f = conv as (input: number[] | string) => number[] | string;

    results.push({
      format: key,
      value: toStringFormat(key, f(input)),
      isInput: false
    });
  }

  return results;
}
