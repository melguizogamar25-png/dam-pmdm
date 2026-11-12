import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form-component/register-form-component';
import { RegistroListComponent } from './components/registro-list-component/registro-list-component';

export const routes: Routes = [
    {path: '', redirectTo: 'registro', pathMatch: 'full'},
    {path: 'registro',  component: RegisterFormComponent},
    {path: 'registros', component: RegistroListComponent},
    {path: '**', redirectTo: 'registro'},
];
