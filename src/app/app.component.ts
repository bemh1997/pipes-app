import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponetn } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponetn],
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('pipes-app');
}
