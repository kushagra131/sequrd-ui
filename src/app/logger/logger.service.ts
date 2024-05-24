import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(msg: unknown) {
    console.log(msg);
  }
  error(err: unknown) {
    console.error(err);
  }
  warn(msg: unknown) {
    console.warn(msg);
  }
}
