import { Component, OnInit } from '@angular/core';
import { BlogModel } from './shared/blog-model';
import { BlogApiService } from './shared/blog-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blog: BlogModel = {
    id: 'unique',
    author: 'nobody',
    title: 'Some blog',
    body: 'Some text',
    date: Date.now(),
  };
  isEditMode = false;
  blogList: Observable<BlogModel[]>;

  constructor(private _blogApi: BlogApiService) {
  }

  ngOnInit() {
    this.blogList = this._blogApi.list();
  }

  onBlogSave(blog: BlogModel) {
    this.blog = blog;
    this.isEditMode = false;
  }

  onEdit() {
    this.isEditMode = true;
  }

  onSelectBlog(id: string) {
    console.log('Blog selected!', id);
  }

  onNew() {

  }
}
