import { Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'logout', title: 'Logout', component: LogoutComponent },
  { path: 'profile', title: 'Profile', component: ProfileComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: '404', component: PageNotFoundComponent },
];
