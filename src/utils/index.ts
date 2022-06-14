import { ColourFormat } from '../constants/ColourFormat';

export function enumToName(value: ColourFormat) {
  return ColourFormat[value];
}

export function typedKeys<T>(o: T): (keyof T)[] {
  return Object.keys(o) as (keyof T)[];
}

export function enumValues<T>(o: T) {
  return typedKeys(o).map((k) => o[k]);
}
