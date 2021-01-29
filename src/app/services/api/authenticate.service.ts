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

  login(pObjeto: any) {
    const seq = this.api.post('login', pObjeto);
    seq.map((res: any) => res);
    return seq;
  }

  Register(pObjeto: any) {
    const seq = this.api.post('create', pObjeto);
    seq.map((res: any) => res);
    return seq;
  }

  Verification(pObjeto: any) {
    const seq = this.api.get(`verification/${pObjeto.email}/${pObjeto.verification_code}`);
    seq.map((res) => res);
    return seq;
  }
}
