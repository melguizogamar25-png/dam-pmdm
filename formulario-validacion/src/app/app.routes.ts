import { Routes } from '@angular/router';
import { RegisterFormPages } from './pages/register-form-pages/register-form-pages';
import { PageNoutFound } from './pages/page-nout-found/page-nout-found';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: RegisterFormPages},
    {path: '**', component: PageNoutFound}
];
