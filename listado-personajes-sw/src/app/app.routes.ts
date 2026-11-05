import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list-component/people-list-component';

export const routes: Routes = [
    {path: '', component: PeopleListComponent},
    {path: '**', redirectTo: ''},
];
