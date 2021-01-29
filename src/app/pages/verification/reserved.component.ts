import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AuthenticateService } from 'src/app/services/api/authenticate.service';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.scss'],
})
export class ReservedComponent implements OnInit {
  email: any;

  verification_code: any;

  ok = false;

  constructor(
    private api: AuthenticateService,
    private parameter: ActivatedRoute,
    private toastr: ToasterService,
  ) {
    this.email = this.parameter.snapshot.params.email;
    this.verification_code = this.parameter.snapshot.params.verification_code;
  }

  ngOnInit(): void {
    console.log(this.email);
  }

  showNotification(type: any, title: any, message: any) {
    this.toastr.pop(type, title, message);
  }

  verification() {
    this.api
      .Verification({ email: this.email, verification_code: this.verification_code })
      .subscribe((res) => {
        const ob = JSON.stringify(res);
        const obj = JSON.parse(ob);

        if (obj === 'Access released') {
          this.ok = true;
        } else {
          this.showNotification('error', 'Unauthorized', 'Error');
        }
      });
  }
}
