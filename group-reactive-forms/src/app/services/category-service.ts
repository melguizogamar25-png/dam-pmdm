import { Service } from '@angular/core';

@Service()
export class CategoryService {

    private categories = ['Tecnología', 'Diseño', 'Programación', 'Novedades'];

    getAll(): string[] {
        return this.categories;
    }
}
