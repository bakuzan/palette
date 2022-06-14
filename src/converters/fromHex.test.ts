import { fromHexToRGB } from './fromHex';

it('should convert hex to rgb - reduced, no alpha', () => {
  const colour = '#fff';

  const result = fromHexToRGB(colour);

  expect(result).toEqual([255, 255, 255]);
});

it('should convert hex to rgb - reduced, with alpha', () => {
  const colour = '#ff08';

  const result = fromHexToRGB(colour);

  expect(result).toEqual([255, 255, 0, 0.53]);
});

it('should convert hex to rgb - full, no alpha', () => {
  const colour = '#5b07cd';

  const result = fromHexToRGB(colour);

  expect(result).toEqual([91, 7, 205]);
});

it('should convert hex to rgb - full, alpha', () => {
  const colour = '#5b07cda2';

  const result = fromHexToRGB(colour);

  expect(result).toEqual([91, 7, 205, 0.64]);
});

it('should throw bad hex code format error', () => {
  const colour = '5b07cda2';

  expect(() => fromHexToRGB(colour)).toThrow();
});
