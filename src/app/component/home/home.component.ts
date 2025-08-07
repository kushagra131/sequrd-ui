import { Component, OnInit, inject } from '@angular/core';
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

import { LoggerService } from '../../logger/logger.service';
import { HomeService } from './home.service';
import { HomeDetails } from '../../interface/home-details';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
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
  ]
})
export class HomeComponent implements OnInit {
  details?: HomeDetails;

  /** Modules & Services DI */
  private logger: LoggerService = inject(LoggerService);
  private service: HomeService = inject(HomeService);

  constructor() {}

  ngOnInit(): void {
    this.getHomeDetails();
  }

  private getHomeDetails() {
    return this.service.getHomeDetails().subscribe({
      next: (value) => this.details = value,
      error: (err) => this.logger.error(err),
      complete: () => {
        this.logger.log(`HTTP getHomeDetails Subscription Complete.`)
        this.logger.log(this.details)
      },
    });
  }
}
