import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form-components',
  styleUrl: './register-form-components.css',
  templateUrl: './register-form-components.html',
})
export class RegisterFormComponents {

  usuario = {
    nombre: '',
    apellidos: '',
    nif: '',
    email: '',
    telefono: '',
    sexo: '',
    comoConocio: '',
    password: '',
    confirmarPassword: '',
    aceptaTerminos: false
  };

  opcionesConocio = [
    {valor: 'google', texto: 'Buscando en Google'},
    {valor: 'amigo', texto: 'A través de un amigo'},
    {valor: 'profesor', texto: 'Por mi profesor'}
  ]

  get passwordsCoinciden(): boolean {
    return this.usuario.password === this.usuario.confirmarPassword;
  }
}
