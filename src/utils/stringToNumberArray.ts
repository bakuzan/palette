import PaletteError from './error';

export default function toNumberArray(colourStr: string) {
  const matches = colourStr.match(/\d+/g);
  if (!matches) {
    throw new PaletteError(2);
  }

  return matches.map(Number);
}
