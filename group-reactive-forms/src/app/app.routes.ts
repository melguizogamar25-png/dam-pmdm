import { Routes } from '@angular/router';
import { PostForm } from './components/post-form/post-form';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: 'post-form', component:PostForm},
    {path: '', pathMatch: 'full', redirectTo: '/post-form'},
    {path: '**', component: NotFoundPage}
];
