import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AppComponent } from 'src/app/app.component';
import { AuthenticateService } from 'src/app/services/api/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name: any;

  email: any;

  birthdate: any;

  password: any;

  constructor(
    private api: AuthenticateService,
    public route: Router,
    private toastr: ToasterService,
    public app: AppComponent,
  ) {}

  ngOnInit(): void {}

  showNotification(type: any, title: any, message: any) {
    this.toastr.pop(type, title, message);
  }

  register() {
    this.app.load(true);
    const birth = `${this.birthdate.substring(0, 2)}/${this.birthdate.substring(
      2,
      4,
    )}/${this.birthdate.substring(4, 8)}`;
    this.api
      .Register({
        name: this.name,
        email: this.email,
        birthdate: birth,
        password: this.password,
      })
      .subscribe((res) => {
        console.log(res);
        const ob = JSON.stringify(res);
        const obj = JSON.parse(ob);
        if (obj.message === 'User registered') {
          this.route.navigate(['/success']);
        } else {
          this.showNotification('error', 'Unauthorized', obj.message);
        }
        this.app.load(false);
      });
  }
}
