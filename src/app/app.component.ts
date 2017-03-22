import { Component } from '@angular/core';
import { BlogModel } from './shared/blog-model';
import { BlogApiService } from './shared/blog-api.service';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blog: BlogModel = {
    id: 'unique',
    author: 'nobody',
    title: 'Some blog',
    body: 'Some text',
    date: Date.now(),
  };
  isEditMode = false;

  constructor(private _blogApi: BlogApiService) {
    (<any>window).blogs = _blogApi;
  }

  onBlogSave(blog: BlogModel) {
    this.blog = blog;
    this.isEditMode = false;
  }

  onEdit() {
    this.isEditMode = true;
  }
}
