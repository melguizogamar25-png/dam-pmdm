import { Routes } from '@angular/router';
import { PostForm } from './components/post-form/post-form';

export const routes: Routes = [
    {path: 'post-form', component: PostForm},
    {path: '', pathMatch: 'full', redirectTo: '/post-form'}
];
