import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import {
  trigger,
  transition,
  useAnimation,
  query,
  sequence,
  animateChild,
} from '@angular/animations';
import {
  cardEnterAnimation,
  cardTitleAnimation,
} from '../../animation/animation';
import { HttpClient } from '@angular/common/http';

import { HomeDetails } from './home-details';
import { LoggerService } from '../../logger/logger.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('cardEnterAnimation', [
      transition(':enter', [
        sequence([
          query('.card', [useAnimation(cardEnterAnimation)]),
          query('@*', animateChild()),
        ]),
      ]),
    ]),
    trigger('cardTitleAnimation', [
      transition(':enter', [useAnimation(cardTitleAnimation)]),
    ]),
  ],
})
export class HomeComponent {
  details?: HomeDetails;

  /** Modules & Services DI */
  private http: HttpClient = inject(HttpClient);
  private logger: LoggerService = inject(LoggerService);

  constructor() {
    this.http.get<HomeDetails>('/home').subscribe({
      next: (resp) => { this.details = resp },
      error: (err) => { this.logger.log(err) },
      complete: () => { this.logger.log(`HTTP /home subscription completed.`) }
    });
  }
  
}
