import { ColourFormat } from './constants/ColourFormat';
import convert from './convert';

it('should throw an error when no converter is found', () => {
  const format = ColourFormat.NotSupported;
  const raw = 'gibberish';

  expect(() => convert(format, raw)).toThrow();
});

it('should return a set of colour space results', () => {
  const format = ColourFormat.Hex;
  const raw = '#fff';

  const results = convert(format, raw);

  expect(results.length).toEqual(6);
  expect(results.filter((x) => x.isInput).length).toEqual(1);
});

it('should return a set of colour space results', () => {
  const format = ColourFormat.RGB;
  const raw = 'rgb(102,2,60)';

  const results = convert(format, raw);

  expect(results.length).toEqual(6);
  expect(results.filter((x) => x.isInput).length).toEqual(1);
});
