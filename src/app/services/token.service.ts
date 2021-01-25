import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/observable/fromPromise';

// import { Router } from "@angular/router";
// import axios,{AxiosInstance} from 'axios';

@Injectable()
export class TokenService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log(`ó o token aqui: ${token}`);

    if (!token) {
      return next.handle(req);
    }

    // if (!token) {
    //   this.api = axios.create({baseURL: "https://node02.protestodireto.com.br", headers: {Authorization: `Bearer ${token}`}});
    //   this.api.post("/autenticacao_pre_cad_client").then(response => console.log(response.data)).catch(response => {
    //     localStorage.clear();
    //     this.router.navigate(["/sign-in"]);
    //   })
    // }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }
}
