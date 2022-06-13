import { ColourFormat } from '../constants/ColourFormat';

export interface ColourValue {
  format: ColourFormat;
  value: string;
  isInput?: boolean;
}
