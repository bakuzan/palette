import { ColourFormat } from './constants/ColourFormat';
import validate from './validate';

it('should return ColourFormat.NotSupported', () => {
  const input = 'some gibberish';

  const result = validate(input);

  expect(result).toEqual(ColourFormat.NotSupported);
});

it('should return ColourFormat.CMYK', () => {
  const input = 'cmyk(0,98,41,60)';

  const result = validate(input);

  expect(result).toEqual(ColourFormat.CMYK);
});

it('should return ColourFormat.HSL', () => {
  const input = 'hsl(352,98,20)';

  const result = validate(input);

  expect(result).toEqual(ColourFormat.HSL);
});

it('should return ColourFormat.HSV', () => {
  const input = 'hsv(352,96,40)';

  const result = validate(input);

  expect(result).toEqual(ColourFormat.NotSupported);
});

it('should return ColourFormat.HWB', () => {
  const input = 'hwb(352,1,60)';

  const result = validate(input);

  expect(result).toEqual(ColourFormat.NotSupported);
});

it('should return ColourFormat.Hex', () => {
  const input = '#fff';

  const result = validate(input);

  expect(result).toEqual(ColourFormat.Hex);
});

it('should return ColourFormat.RGB', () => {
  const input = 'rgb(102,2,60)';

  const result = validate(input);

  expect(result).toEqual(ColourFormat.RGB);
});
