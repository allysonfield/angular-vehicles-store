import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AuthenticateService } from 'src/app/services/api/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public email = '';

  public password = '';

  constructor(
    private authenticate: AuthenticateService,
    public route: Router,
    private toastr: ToasterService,
  ) {}

  ngOnInit(): void {}

  showNotification(type: any, title: any, message: any) {
    this.toastr.pop(type, title, message);
  }

  login() {
    if (this.email === '' || this.password === '') {
      this.showNotification('error', 'Atenção', 'Preencha todos os dados.');
    } else {
      this.authenticate.login({ email: this.email, password: this.password }).subscribe((resp) => {
        const ob = JSON.stringify(resp);
        const obj = JSON.parse(ob);
        console.log('resposta', obj);
        this.route.navigate(['/branch']);
        // if (obj.message === 'Logado com sucesso') {
        //   localStorage.setItem('data_user@openbank', JSON.stringify(obj.user));
        //   localStorage.setItem('token', obj.token);
        //   this.route.navigate(['/dashboard']);
        // } else {
        //   alert('Email ou senha incorretos');
        // }
      });
    }
  }
}
