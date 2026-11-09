import { Service, signal } from '@angular/core';
import { Post } from '../interfaces/post';

@Service()
export class PostService {

    private posts = signal<Post[]>([]);

    getAll(): Post[] {
        return this.posts();
    }

    create(post: Post) {
        this.posts.update(list => [...list, post]);
    }
}
