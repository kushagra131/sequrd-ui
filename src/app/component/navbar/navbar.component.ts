import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { LoggerService } from '../../logger/logger.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  protected hide: boolean | undefined;

  /** Services DI */
  private router: Router = inject(Router);
  private logger: LoggerService = inject(LoggerService);
  private loginService: LoginService = inject(LoginService);

  constructor() {}

  ngOnInit(): void {
    this.loginService.isLogin$.subscribe({
      next: (v) => (this.hide = v),
      error: (e) => this.logger.error(e),
      complete: () => this.logger.log(`isLogin Subscription Complete.`),
    });
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
