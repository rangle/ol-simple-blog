import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';
import { BlogModel } from './blog-model';

@Injectable()
export class BlogApiService {
  static uid(): string {
    const rando = Math.floor(Math.random() * 10000);
    const date = Date.now().toString(16);
    return `blog-${date}-${rando}`;
  }

  static createBlog(author: string): BlogModel {
    return {
      id: BlogApiService.uid(),
      author,
      title: 'New Post!',
      date: Date.now()
    };
  }

  constructor(private _api: ApiService) { }

  list() {
    return this._api.get('blog/list')
      .map((result) => result.json());
  }

  set(blog: BlogModel) {
    return this._api.set('blog/set', blog);
  }

}
