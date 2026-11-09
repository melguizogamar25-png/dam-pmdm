import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../services/category-service';
import { PostService } from '../../services/post-service';
import { Post } from '../../interfaces/post';

@Component({
  imports: [ReactiveFormsModule, NgbInputDatepicker],
  selector: 'app-post-form',
  styleUrl: './post-form.css',
  templateUrl: './post-form.html',
})
export class PostForm {

  private categoryService = inject(CategoryService);
  private postService = inject(PostService);

  categories = this.categoryService.getAll();

  // un FormControl independiente por cada campo del formulario
  title = new FormControl('');
  description = new FormControl('');
  category = new FormControl('');
  tags = new FormControl('');
  email = new FormControl('');
  publishNow = new FormControl(true);
  publishDate = new FormControl<NgbDateStruct | null>(null);

  sendForm() {
    // el valor de cada control se obtiene con la propiedad value
    const post: Post = {
      title: this.title.value!,
      description: this.description.value!,
      category: this.category.value!,
      tags: this.tags.value!.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      email: this.email.value!,
      publishNow: this.publishNow.value!,
      publishDate: this.publishDate.value,
    };
    this.postService.create(post);
    console.log(post);
  }
}
