import { Service } from '@angular/core';
import { Curso } from '../interfaces/curso-interface';

@Service()
export class CursoService {
      private readonly cursos: Curso[] = [
    { id: 'angular', nombre: 'Angular' },
    { id: 'spring', nombre: 'Java y Spring Boot' },
    { id: 'python', nombre: 'Python' },
    { id: 'js-ts', nombre: 'JavaScript y TypeScript' },
    { id: 'kotlin', nombre: 'Desarrollo móvil con Kotlin' },
    { id: 'sql', nombre: 'Bases de datos SQL' },
  ];

  getCursos(): Observable<Curso[]> {
    return of(this.cursos);
  }
}
