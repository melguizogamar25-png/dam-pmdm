import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { email, maxLength, minLength, pattern, required, validate } from '@angular/forms/signals';
import { PetRegistration } from '../../interfaces/pet-registration-interface';

const PERSON_NAME_PATTERN = /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/;
const PET_NAME_PATTERN = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
const PHONE_PATTERN = /^(\+34 ?)?[6-9]\d{8}$/;
const MICROCHIP_PATTERN = /^\d{15}$/;
const PASSWORD =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/;


@Component({
  imports: [],
  selector: 'app-register-form-pages',
  styleUrl: './register-form-pages.css',
  templateUrl: './register-form-pages.html',
})
export class RegisterFormPages {

  registerForm = new FormGroup({
    owner: new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(PERSON_NAME_PATTERN)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(PERSON_NAME_PATTERN)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(PHONE_PATTERN)]),
      email: new FormControl('', [Validators.required, Validators.email])
    }),
    pet: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(PET_NAME_PATTERN)]),
      species: new FormControl('', [Validators.required]),
      sex: new FormControl<string | null>(null, [Validators.required]),
      breed: new FormControl('', Validators.maxLength(40)),
      age: new FormControl<number | null>(null, [Validators.required, Validators.minLength(0), Validators.maxLength(30)]),
      weight: new FormControl<number | null>(null, [Validators.required, Validators.minLength(0.1), Validators.maxLength(90)]),
      microchip: new FormControl('', [Validators.required, Validators.pattern(MICROCHIP_PATTERN)])
    }),
    account: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(24), Validators.pattern(PASSWORD)])
    }),
    visit: new FormGroup({
      reason: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)])
    }),
    consents: new FormGroup({
      privacyPolicy: new FormControl(false, [Validators.requiredTrue]),
      vaccineReminders: new FormControl(false)
    })
  })

   errorMessages: Record<string, Record<string, string>> = {
    'owner.FirstName': {
      required: 'El nombre es obligatorio',
      minLength: 'Mínimo 2 caracteres',
      maxLength: 'Máximo 30 caracteres',
      pattern: 'Solo se permiten letras',
    },
    'owner.LastName': {
      required: 'El nombre es obligatorio',
      minLength: 'Mínimo 2 caracteres',
      maxLength: 'Máximo 30 caracteres',
      pattern: 'Solo se permiten letras',
    },
    'owner.phone': {
      required: 'El teléfono es obligatorio',
      pattern: 'Introduce un teléfono español válido',
    },
    'owner.email': {
      required: 'El email es obligatorio',
      email: 'Formato de email no válido',
    },
    'pet.name': {
      required: 'El nombre de la mascota es obligatorio',
      minLength: 'Entre 2 y 20 caracteres',
      maxLength: 'Entre 2 y 20 caracteres',
      pattern: 'Solo letras, espacios y guiones',
    },
    'pet.species': {
      required: 'Selecciona una especie',
    },
    'pet.sex': {
      required: 'Indica el sexo de la mascota',
    },
    'pet.breed': {
      maxLength: 'Máximo 40 caracteres',
    },
    'pet.age': {
      required: 'La edad es obligatoria',
      minLength: 'La edad debe estar entre 0 y 30 años',
      maxLength: 'La edad debe estar entre 0 y 30 años',
    },
    'pet.weight': {
      required: 'El peso es obligatorio',
      min: 'El peso debe estar entre 0,1 y 90 kg',
      max: 'El peso debe estar entre 0,1 y 90 kg',
    },
    'pet.microchip': {
      required: 'El microchip es obligatorio',
      pattern: 'El microchip debe tener exactamente 15 dígitos numéricos',
    },
    'account.password': {
      required: 'La contraseña es obligatoria',
      minlength: 'Mínimo 10 caracteres',
      maxlength: 'Máximo 24 caracteres',
      pattern: 'Tiene que tener al menos una mayúscula, una minúscula y un número, sin espacios',
    },
    'visit.reason': {
      required: 'Describe el motivo de la visita',
      minlength: 'Entre 10 y 300 caracteres',
      maxlength: 'Entre 10 y 300 caracteres',
    },
    'consents.privacyPolicy': {
      required: 'Debes aceptar la política de privacidad',
    },
  };

  isInvalidField(field: string) {
    const control = this.registerForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  getErrorMessages(field: string): string[] {
    const errors = this.registerForm.get(field)?.errors;
    if (!errors) {
      return [];
    }
    const messages = this.errorMessages[field] ?? {};
    return Object.keys(messages)
      .filter((errorKey) => errors[errorKey])
      .map((errorKey) => messages[errorKey]);
  }

  formSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const registration = this.registerForm.getRawValue() as PetRegistration;
    console.log(registration);
  }

  }







