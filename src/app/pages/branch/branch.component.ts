import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RoutesService } from 'src/app/services/api/authRoutes.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {
  public branches: any;

  constructor(private api: RoutesService, public route: Router, public app: AppComponent) {}

  ngOnInit(): void {
    this.app.load(true);
    this.api.Branch().subscribe((res) => {
      console.log(res);
      const ob = JSON.stringify(res);
      const obj = JSON.parse(ob);
      this.branches = obj;
      this.app.load(false);
    });
  }

  goToCars(branch_id: any) {
    this.route.navigate(['/cars', { branch_id }]);
  }

  goToMyCar() {
    this.route.navigate(['/mycar']);
  }
}
