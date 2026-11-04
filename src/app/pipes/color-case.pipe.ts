import { Pipe, PipeTransform } from '@angular/core';
import {
  Color,
  ColorMap,
} from '../interfaces/hero.interface';

export type ColorHex =
  (typeof ColorMap)[keyof typeof ColorMap];
// Equivale a: '#E57373' | '#424242' | '#64B5F6' | '#81C784'

@Pipe({
  name: 'colorCase',
})
export class ColorPipe implements PipeTransform {
  transform(value: Color): ColorHex {
    return ColorMap[value] ?? '#424242';
  }
}
