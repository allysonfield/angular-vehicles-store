import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(
    public http: Http,
    // public api2: ApiService01,
    public api: ApiService,
    public router: Router,
  ) {}

  /// /////////////// WEB CALLS ////////////////////

  callService(cep: String): any {
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`);
  }

  login(pObjeto: any) {
    const seq = this.api.post('login', pObjeto);
    seq.map((res: any) => res);
    return seq;
  }

  userRegister(pObjeto: any) {
    const seq = this.api.post('user/register', pObjeto);
    seq.map((res: any) => res);
    return seq;
  }
}
