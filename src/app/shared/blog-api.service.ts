import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogApiService {

  constructor(private _api: ApiService) { }

  list() {
    return this._api.get('/blog/list')
      .map((result) => result.json());
  }

}
