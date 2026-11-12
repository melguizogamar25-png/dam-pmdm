import { Service } from '@angular/core';
import { Registro, RegistroGuardado } from '../interfaces/registro-interface';
import { Observable } from 'rxjs';

@Service()
export class RegistroService {
    private registros: RegistroGuardado[] = [];
    private siguienteId = 1;

    registrar(registro: Registro): Observable<RegistroGuardado> {
        const guardado: RegistroGuardado = {
            ...registro,
            id: this.siguienteId++,
            fechaAlta: new Date().toISOString(),
        };
        this.registros.push(guardado);
        return of(guardado).pipe(delay(500));
    }
    getRegistros(): RegistroGuardado[] {
        return [...this.registros];
    }
}
