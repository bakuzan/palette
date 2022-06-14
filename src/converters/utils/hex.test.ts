import { numberToHex, parseHexToDecimal } from './hex';

it('should convert hex string to number', () => {
  const hex = '66';

  const result = parseHexToDecimal(hex);

  expect(result).toEqual(102);
});

it('should convert number to hex string', () => {
  const num = 60;

  const result = numberToHex(num);

  expect(result).toEqual('3c');
});
