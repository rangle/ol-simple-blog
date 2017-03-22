import { Component, OnInit } from '@angular/core';
import { BlogModel } from './shared/blog-model';
import { BlogApiService } from './shared/blog-api.service';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blog: BlogModel;
  isEditMode = false;
  blogList: string[];
  error: string;

  constructor(private _blogApi: BlogApiService) {
  }

  list() {
    this._blogApi.list()
      .subscribe((blogList: string[]) => {
        this.blogList = blogList;
      }, (err) => {
        this.error = err.message;
      });
  }

  ngOnInit() {
    this.list();
  }

  onBlogSave(blog: BlogModel) {
    this.isEditMode = false;
    this._blogApi
      .set(blog)
      .subscribe();
  }

  onEdit() {
    this.isEditMode = true;
  }

  onSelectBlog(id: string) {
    this._blogApi.get(id).subscribe((blog: BlogModel) => {
      this.blog = blog;
    });
  }

  onNew() {
    this._blogApi.set(BlogApiService.createBlog('nobody'))
      .subscribe(() => { this.list(); });
  }
}
