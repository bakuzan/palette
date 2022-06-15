import { fromHSLToRGB } from './fromHSL';

const round = Math.round;

it('should convert HSL to RGB - achromatic', () => {
  const colour = [0, 0, 100];

  const result = fromHSLToRGB(colour);

  expect(result).toEqual([255, 255, 255]);
});

it('should convert HSL to RGB', () => {
  const colour = [325, 96, 20];

  const result = fromHSLToRGB(colour).map(round);

  expect(result).toEqual([100, 2, 59]); // Remember that HSL doesn't have correct conversion when rounded
});

it('should convert HSL to RGB preserve alpha channel', () => {
  const colour = [325, 96, 20, 0.5];

  const result = fromHSLToRGB(colour);

  expect(result.pop()).toEqual(colour.pop());
});
