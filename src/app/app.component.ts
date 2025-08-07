import { Component, inject } from '@angular/core';

import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { LoggerService } from './logger/logger.service';
import { slideInRouteAnimation } from './animation/animation';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCommonModule,
    MatCardModule,
    MatToolbarModule,
    NavbarComponent,
    ProgressBarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  animations: [slideInRouteAnimation]
})
export class AppComponent {
  protected footer_content = `Sequrd Copyright 2024`;
  private logger: LoggerService = inject(LoggerService);

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
