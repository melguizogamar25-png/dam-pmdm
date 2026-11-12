import { Component } from '@angular/core';
import { RegistroGuardado } from '../../interfaces/registro-interface';
import { Curso } from '../../interfaces/curso-interface';

@Component({
  imports: [],
  selector: 'app-registro-list-component',
  styleUrl: './registro-list-component.css',
  templateUrl: './registro-list-component.html',
})
export class RegistrosListComponent implements OnInit {
  private readonly registroService = inject(RegistroService);
  private readonly cursoService = inject(CursoService);

  registros: RegistroGuardado[] = [];
  cursos: Curso[] = [];

  ngOnInit(): void {
    this.registros = this.registroService.getRegistros();
    this.cursoService.getCursos().subscribe((cursos) => (this.cursos = cursos));
  }

  nombreCurso(id: string): string {
    return this.cursos.find((c) => c.id === id)?.nombre ?? id;
  }
}
