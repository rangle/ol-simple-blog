import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const url = 'https://i0r3o8fr79.execute-api.us-east-1.amazonaws.com/dev';

@Injectable()
export class ApiService {

  constructor(private _http: Http) {
  }

  get(path: string) {
    return this._http.get(`${url}/${path}`);
  }

  set(path: string, payload: any) {
    return this._http.post(`${url}/${path}`, payload);
  }
}
