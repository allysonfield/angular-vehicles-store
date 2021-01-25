import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(
    public http: Http,
    // public api2: ApiService01,
    public api: ApiService,
    public router: Router,
  ) {}

  /// /////////////// WEB CALLS ////////////////////

  Branch() {
    const seq = this.api.get('branch/list');
    seq.map((res) => res);
    return seq;
  }

  AmountCreate(pObjeto: any) {
    const seq = this.api.post('amount/create', pObjeto);
    seq.map((res) => res);
    return seq;
  }

  Amount(pObjeto: any) {
    const seq = this.api.get(`amount/index/${pObjeto.user_id}`);
    seq.map((res) => res);
    return seq;
  }

  AmountList(pObjeto: any) {
    const seq = this.api.get(`amount/all/${pObjeto.user_id}`);
    seq.map((res) => res);
    return seq;
  }

  DepositList(pObjeto: any) {
    const seq = this.api.get(`movement/list/${pObjeto.user_id}`);
    seq.map((res) => res);
    return seq;
  }

  Transfer(pObjeto: any) {
    const seq = this.api.post('movement/transfersend', pObjeto);
    seq.map((res) => res);
    return seq;
  }

  Depositer(pObjeto: any) {
    const seq = this.api.post('movement/deposit', pObjeto);
    seq.map((res) => res);
    return seq;
  }

  SafeAmount(pObjeto: any) {
    const seq = this.api.get(`safe/index/${pObjeto.user_id}`);
    seq.map((res) => res);
    return seq;
  }

  SafeAmountDeposit(pObjeto: any) {
    const seq = this.api.post('safe/deposit', pObjeto);
    seq.map((res) => res);
    return seq;
  }

  SafeAmountWithdraw(pObjeto: any) {
    const seq = this.api.post('safe/withdraw', pObjeto);
    seq.map((res) => res);
    return seq;
  }

  UserInc(pObjeto: any) {
    const seq = this.api.post('user/register', pObjeto);
    seq.map((res) => res);
    return seq;
  }
}
