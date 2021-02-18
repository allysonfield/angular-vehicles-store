import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AppComponent } from 'src/app/app.component';
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
    public app: AppComponent,
  ) {}

  ngOnInit(): void {}

  showNotification(type: any, title: any, message: any) {
    this.toastr.pop(type, title, message);
  }

  login() {
    try {
      if (this.email === '' || this.password === '') {
        this.showNotification('error', 'Atenção', 'Preencha todos os dados.');
      } else {
        this.app.load(true);
        this.authenticate.login({ email: this.email, password: this.password }).subscribe(
          (resp) => {
            const ob = JSON.stringify(resp);
            const obj = JSON.parse(ob);
            console.log('resposta', obj);

            if (obj.message === 'Success') {
              localStorage.setItem('token@vehiclesstorage', obj.token);
              this.app.logged = true;
              this.route.navigate(['/branch']);
            } else {
              this.showNotification('error', 'Unauthorized', 'Email or password invalids.');
            }
            this.app.load(false);
          },
          (error) => {
            this.app.load(false);
            console.log(error.error);
            this.showNotification('error', 'Unauthorized', error.error);
          },
        );
      }
    } catch (error) {
      console.log(error.response);
    }
  }
}
