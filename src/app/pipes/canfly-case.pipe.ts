import { Pipe, PipeTransform } from '@angular/core';

export type FlyStatus = 'Puede volar' | 'No puede volar';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): FlyStatus {
    return canFly ? 'Puede volar' : 'No puede volar';
  }
}
