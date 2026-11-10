import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category-service';
import { PostService } from '../../services/post-service';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { email } from '@angular/forms/signals';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../../interfaces/post';

@Component({
  imports: [],
  selector: 'app-post-form',
  styleUrl: './post-form.css',
  templateUrl: './post-form.html',
})
export class PostForm {

  private categoryService = inject(CategoryService);
  private postService = inject(PostService);

  categories = this.categoryService.getAll();

  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    tags: new FormControl(''),
    email: new FormControl(''),
    publishNow: new FormControl(true),
    publishDate: new FormControl<NgbDateStruct | null>(null),
  });

  sendForm() {
    const value = this.postForm.value;
    const post: Post = {
      title: value.title!,
      description: value.description!,
      category: value.category!,
      tags: value.tags!.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      email: value.email!,
      publishNow: value.publishNow!,
      publishDate: value.publishDate!,
    };
    this.postService.create(post);
    console.log(post);
  }
}
