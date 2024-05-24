import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LoggerService } from '../../logger/logger.service';
import { UserDetails } from '../../interface/user-details';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Tip: never expose the Subject itself.
  private isLoginSubject = new BehaviorSubject<boolean>(false);
  isLogin$ = this.isLoginSubject.asObservable();

  /** Services DI */
  private logger: LoggerService = inject(LoggerService);

  constructor() {}

  submitLoginDetails(credentials: UserDetails) {
    this.logger.log('Credentials: ' + JSON.stringify(credentials));
  }

  setIsLogin(value: boolean) {
    this.isLoginSubject.next(value);
  }
}
