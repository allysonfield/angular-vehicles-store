/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3333';

  token = '';

  constructor(
    public http: HttpClient, // private authHttp: AuthHttp
  ) {}

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      const p = new URLSearchParams();
      for (const k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = (!options.search && p) || options.search;
    }

    return this.http.get(`${this.url}/${endpoint}`);
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(`${this.url}/${endpoint}`, body);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(`${this.url}/${endpoint}`, body);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(`${this.url}/${endpoint}`);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(`${this.url}/${endpoint}`, body);
  }
}
