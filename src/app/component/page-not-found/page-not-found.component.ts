import { Component, inject } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MatCardModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  protected title!: string | undefined;
  protected details!: string | undefined;
  private router: Router = inject(Router);

  constructor() {
    this.title = "404. That's an error.";
    this.details =
      'The requested URL: ' +
      this.router.url +
      ' was not found on this server.';
  }
}
