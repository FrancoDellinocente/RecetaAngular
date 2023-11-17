import { Routes } from '@angular/router';
import { HomeComponent } from './home/page/home/home.component';
import { AuthComponent } from './auth/page/auth/auth.component';
import { CreateRecComponent } from './formPages/page/create-rec/create-rec.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'auth',
    component: AuthComponent,
  },

  {
    path: 'createReceta',
    component: CreateRecComponent,
    canActivate: [authGuard],
  },
];
