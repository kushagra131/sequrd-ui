import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { LoginService } from './login.service';
import { LoggerService } from '../../logger/logger.service';
import { DividerComponent } from '../divider/divider.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    DividerComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  protected hide: boolean | undefined;
  matcher = new MyErrorStateMatcher();

  /** Services DI */
  private loginService: LoginService = inject(LoginService);
  private logger: LoggerService = inject(LoggerService);

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor() {
    this.hide = true;
  }

  ngOnInit() {
    this.loginService.setIsLogin(true);
  }

  ngOnDestroy() {
    this.loginService.setIsLogin(false);
  }

  submitLoginDetails() {
    if (this.username.value && this.password.value) {
      this.loginService.submitLoginDetails(
        this.username.value ?? '',
        this.password.value ?? ''
      );
    }
  }
}
