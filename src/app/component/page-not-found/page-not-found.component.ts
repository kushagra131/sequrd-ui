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
  imports: [MatCardModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './page-not-found.component.html',
  standalone: true,
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  private router: Router = inject(Router);
  protected title = `404. That's an error.`;
  protected details = `The requested URL: ${this.router.url} was not found on this server.`;

  constructor() {}
}
