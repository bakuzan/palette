import { rgbToHue } from './rgb';

it('should convert r,g,b values into a hue value - achromatic', () => {
  const red = 0;
  const green = 0;
  const blue = 0;

  const result = rgbToHue(red, green, blue);

  expect(result).toEqual(0);
});

it('should convert r,g,b values into a hue value - tyrian purple', () => {
  const red = 102 / 255;
  const green = 2 / 255;
  const blue = 60 / 255;

  const result = Math.round(rgbToHue(red, green, blue));

  expect(result).toEqual(325);
});

it('should convert r,g,b values into a hue value - red', () => {
  const red = 255 / 255;
  const green = 0 / 255;
  const blue = 0 / 255;

  const result = rgbToHue(red, green, blue);

  expect(result).toEqual(0);
});

it('should convert r,g,b values into a hue value - green', () => {
  const red = 0 / 255;
  const green = 255 / 255;
  const blue = 0 / 255;

  const result = rgbToHue(red, green, blue);

  expect(result).toEqual(120);
});
it('should convert r,g,b values into a hue value - blue', () => {
  const red = 0 / 255;
  const green = 0 / 255;
  const blue = 255 / 255;

  const result = rgbToHue(red, green, blue);

  expect(result).toEqual(240);
});

it('should convert r,g,b values into a hue value - yellow', () => {
  const red = 255 / 255;
  const green = 255 / 255;
  const blue = 0 / 255;

  const result = rgbToHue(red, green, blue);

  expect(result).toEqual(60);
});

it('should convert r,g,b values into a hue value - aqua', () => {
  const red = 0 / 255;
  const green = 255 / 255;
  const blue = 255 / 255;

  const result = rgbToHue(red, green, blue);

  expect(result).toEqual(180);
});
it('should convert r,g,b values into a hue value - fuchsia', () => {
  const red = 255 / 255;
  const green = 0 / 255;
  const blue = 255 / 255;

  const result = rgbToHue(red, green, blue);

  expect(result).toEqual(300);
});
