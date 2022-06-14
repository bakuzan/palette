import { fromCMYKToRGB } from './fromCMYK';

it('should convert CMYK to RGB', () => {
  const colour = [0, 98, 41, 60];

  const result = fromCMYKToRGB(colour);

  expect(result).toEqual([102, 2, 60]);
});

it('should convert CMYK to RGB preserving alpha channel', () => {
  const colour = [0, 98, 41, 60, 0.5];

  const result = fromCMYKToRGB(colour);

  expect(result).toEqual([102, 2, 60, 0.5]);
});
