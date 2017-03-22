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
  blogList: BlogModel[];
  error: string;

  constructor(private _blogApi: BlogApiService) {
  }

  ngOnInit() {
    this._blogApi.list()
      .subscribe((blogList: BlogModel[]) => {
        this.blogList = blogList;
      }, (err) => {
        this.error = err.message;
      });
  }

  onBlogSave(blog: BlogModel) {
    this.blog = blog;
    this.isEditMode = false;
  }

  onEdit() {
    this.isEditMode = true;
  }

  onSelectBlog(id: string) {
    this.blog = this.blogList.find((blog: BlogModel) => {
      return blog.id === id;
    });
  }

  onNew() {
    BlogApiService.createBlog('Nobody');
  }
}
