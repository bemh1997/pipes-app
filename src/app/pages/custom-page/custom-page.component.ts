import { Component, computed, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { heroes } from '../../data/heros.data';
import { Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/canfly-case.pipe';
import { ColorPipe } from '../../pipes/color-case.pipe';
import { CreatorPipe } from '../../pipes/creator-case.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    CanFlyPipe,
    ColorPipe,
    CreatorPipe,
    HeroColorPipe,
    HeroFilterPipe,
    HeroSortByPipe,
    TitleCasePipe,
    ToggleCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Humberto Bernal ');
  upperCase = signal(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('');

  translateSort = computed(() => {
    switch (this.sortBy()) {
      case 'name':
        return 'nombre';
      case 'canFly':
        return 'volar';
      case 'color':
        return 'color';
      case 'creator':
        return 'creador';
      default:
        return 'sin ordenar'; // O vacio: ''
    }
  });

  changeCase() {
    this.upperCase.set(!this.upperCase());
  }
}
