import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

// categorías disponibles para una publicación
export type Category = 'Tecnología' | 'Diseño' | 'Programación' | 'Novedades';

// datos de una publicación del blog (los que se capturan en el formulario)
export interface Post {
  title:       string;
  description: string;
  category:    Category | '';
  tags:        string[];
  email:       string;
  publishNow:  boolean;
  publishDate: NgbDateStruct | null;
}
