import {
  fromRGBToCMYK,
  fromRGBToHex,
  fromRGBToHSL,
  fromRGBToHSV,
  fromRGBToHWB
} from './fromRGB';

const round = Math.round;

it('should convert RGB to CMYK - black', () => {
  const colour = [0, 0, 0];

  const result = fromRGBToCMYK(colour);

  expect(result).toEqual([0, 0, 0, 100]);
});
it('should convert RGB to CMYK - non-black', () => {
  const colour = [102, 2, 60];

  const result = fromRGBToCMYK(colour);

  expect(result).toEqual([0, 98, 41, 60]);
});
it('should convert RGB to HSL', () => {
  const colour = [102, 2, 60];

  const result = fromRGBToHSL(colour).map(round);

  expect(result).toEqual([325, 96, 20]);
});
it('should convert RGB to HSV', () => {
  const colour = [102, 2, 60];

  const result = fromRGBToHSV(colour).map(round);

  expect(result).toEqual([325, 98, 40]);
});
it('should convert RGB to HWB', () => {
  const colour = [102, 2, 60];

  const result = fromRGBToHWB(colour).map(round);

  expect(result).toEqual([325, 1, 60]);
});
it('should convert RGB to Hex', () => {
  const colour = [102, 2, 60];

  const result = fromRGBToHex(colour);

  expect(result).toEqual('#66023c');
});

it('should preserve alpha channel', () => {
  const colour = [102, 2, 60, 0.5];

  const results = [fromRGBToCMYK, fromRGBToHSL, fromRGBToHSV, fromRGBToHWB].map(
    (f) => f(colour)
  );

  results.push(fromRGBToHSL([0, 0, 0, 0.5])); // achromatic path

  for (const result of results) {
    expect(result.pop()).toEqual(0.5);
  }

  const result = fromRGBToHex(colour);
  expect(result.slice(-2)).toEqual('80');
});
