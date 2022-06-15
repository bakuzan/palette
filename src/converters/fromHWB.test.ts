import { fromHWBToRGB } from './fromHWB';

const round = Math.round;

it('should convert HWB to RGB', () => {
  const colour = [325, 1, 60];

  const result = fromHWBToRGB(colour).map(round);

  expect(result).toEqual([100, 1, 59]);
});

it('should convert HWB to RGB preserve alpha channel', () => {
  const colour = [325, 1, 60, 0.5];

  const result = fromHWBToRGB(colour);

  expect(result.pop()).toEqual(colour.pop());
});
