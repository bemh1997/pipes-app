import { Creator } from './../interfaces/hero.interface';
import { Pipe, PipeTransform } from '@angular/core';

export type CreatorName = 'DC' | 'Marvel';

@Pipe({
  name: 'creatorCase',
})
export class CreatorPipe implements PipeTransform {
  transform(value: Creator): CreatorName {
    return (Creator[value] as CreatorName) ?? 'Marvel';
  }
}
