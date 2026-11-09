import { Service } from '@angular/core';
import { Category } from '../interfaces/post';

@Service()
export class CategoryService {

    private categories: Category[] = ['Tecnología', 'Diseño', 'Programación', 'Novedades'];

    getAll(): Category[] {
        return this.categories;
    }
}
