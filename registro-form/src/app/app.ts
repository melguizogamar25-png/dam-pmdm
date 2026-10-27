import { Component, signal } from '@angular/core';
import { RegisterFormComponents } from './components/register-form-components/register-form-components';

@Component({
  imports: [RegisterFormComponents],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('registro-form');
}
