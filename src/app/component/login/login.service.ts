import { Injectable, inject } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';
import { BehaviorSubject } from 'rxjs';

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

  submitLoginDetails(username: string, password: string) {
    this.logger.log(
      `Login Details Received: Username: ${username}, Password: ${password}.`
    );
  }

  setIsLogin(value: boolean) {
    this.isLoginSubject.next(value);
  }
}
