import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RoutesService } from 'src/app/services/api/authRoutes.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  page = 0;

  public limit = 6;

  cars: any;

  columns: any = 3;

  branch_id: any;

  constructor(
    private api: RoutesService,
    private parameter: ActivatedRoute,
    public route: Router,
    public app: AppComponent,
  ) {
    this.branch_id = parseInt(this.parameter.snapshot.params.branch_id);
  }

  ngOnInit(): void {
    this.app.load(true);
    this.api
      .Cars({ page: this.page, limit: this.limit, branch_id: this.branch_id })
      .subscribe((res) => {
        console.log(res);
        const ob = JSON.stringify(res);
        const obj = JSON.parse(ob);
        this.cars = obj.rows;
        this.app.load(false);
      });
  }

  goToMyCar() {
    this.route.navigate(['/mycar']);
  }

  goToBooking(car_id: any) {
    this.route.navigate(['/booking', { car_id }]);
  }
}
