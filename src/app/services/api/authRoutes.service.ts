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

  Cars(pObjeto: any) {
    const seq = this.api.get(`car/list/${pObjeto.branch_id}/${pObjeto.page}/${pObjeto.limit}`);
    seq.map((res) => res);
    return seq;
  }

  Car(pObjeto: any) {
    const seq = this.api.get(`car/one/${pObjeto.car_id}`);
    seq.map((res) => res);
    return seq;
  }

  Booking(pObjeto: any) {
    const seq = this.api.post('booking/create', pObjeto);
    seq.map((res) => res);
    return seq;
  }

  MyCars() {
    const seq = this.api.get('booking/mylist');
    seq.map((res) => res);
    return seq;
  }
}
