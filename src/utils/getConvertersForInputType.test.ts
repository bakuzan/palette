import { enumValues } from '.';
import { ColourFormat } from '../constants/ColourFormat';
import getConvertersForInputType from './getConvertersForInputType';

it('should fetch the converter map for the format type', () => {
  enumValues(ColourFormat).forEach((format) => {
    const result = getConvertersForInputType(format);

    if (result) {
      expect(result?.size).toEqual(5);
    } else {
      expect(result).toBeUndefined();
    }
  });
});
