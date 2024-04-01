import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCommonModule,
    MatCardModule,
    NavbarComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  footer_content = 'Sequrd Application Copyright 2024';
}
