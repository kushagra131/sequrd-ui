import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoggerService } from '../../logger/logger.service';
import { HomeDetails } from '../../interface/home-details';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  /** Observables */
  private homeDetails$!: Observable<HomeDetails>;
  /** Modules & Services DI */
  private http: HttpClient = inject(HttpClient);
  private logger: LoggerService = inject(LoggerService);

  private baseURL: string = `http://localhost:8080/sequrd/api/v1/home`;

  constructor() {
    this.homeDetails$ = this.http.get<HomeDetails>(this.baseURL);
  }

  public getHomeDetails(): Observable<HomeDetails> {
    return this.homeDetails$;
  }
}
