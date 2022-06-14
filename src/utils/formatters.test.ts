import { ColourFormat } from '../constants/ColourFormat';
import { toNumberArray, toStringFormat } from './formatters';

it('should throw when trying to convert string representation to number array', () => {
  const input = 'no number gibberish';

  expect(() => toNumberArray(input)).toThrow();
});

it('should convert string representation to number array', () => {
  const input = 'rgb(102,2,60)';

  const result = toNumberArray(input);

  expect(result).toEqual([102, 2, 60]);
});

it('should return string without conversion', () => {
  const input = '#fff';

  const result = toStringFormat(ColourFormat.Hex, input);

  expect(result).toEqual(input);
});

it('should convert number array to string representation', () => {
  const input = [352, 96, 20];

  const result = toStringFormat(ColourFormat.HSL, input);

  expect(result).toEqual('hsl(352,96,20)');
});
