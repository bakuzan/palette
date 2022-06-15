import { fromHSVToRGB } from './fromHSV';

const round = Math.round;

it('should convert HSV to RGB - achromatic', () => {
  const colour = [0, 0, 100];

  const result = fromHSVToRGB(colour);

  expect(result).toEqual([255, 255, 255]);
});

it('should convert HSV to RGB', () => {
  const colour = [325, 98, 40];

  const result = fromHSVToRGB(colour).map(round);

  expect(result).toEqual([102, 2, 60]);
});

it('should convert HSV to RGB preserve alpha channel', () => {
  const colour = [325, 96, 20, 0.5];

  const result = fromHSVToRGB(colour);

  expect(result.pop()).toEqual(colour.pop());
});
