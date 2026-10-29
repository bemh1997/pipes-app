import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponetn {
  routes = routes.map( ({title, path}) => ({
    title,
    path,
  }))
}
