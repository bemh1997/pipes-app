import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-page.component',
  imports: [],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class CustomPageComponent {}
