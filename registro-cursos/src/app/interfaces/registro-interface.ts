export interface DatosPersonales {
  nombre: string;
  apellidos: string;
  dni: string;
  telefono: string;
}
export interface DatosCuenta {
  usuario: string;
  email: string;
  password: string;
}

export interface PreferenciasCurso {
  cursoId: string;
  horas: number;
  codigoPostal: string;
}

export interface Registro extends DatosPersonales, DatosCuenta, PreferenciasCurso {
  terminos: boolean;
}

export interface RegistroGuardado extends Registro {
  id: number;
  fechaAlta: string;
}
