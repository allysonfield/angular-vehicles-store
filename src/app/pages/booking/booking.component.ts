import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { RoutesService } from 'src/app/services/api/authRoutes.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  id: any;

  public car: any;

  constructor(
    private api: RoutesService,
    private toastr: ToasterService,
    private parameter: ActivatedRoute,
    public route: Router,
  ) {
    this.id = parseInt(this.parameter.snapshot.params.car_id);
  }

  ngOnInit(): void {
    this.api.Car({ car_id: this.id }).subscribe((res) => {
      console.log(res);
      const ob = JSON.stringify(res);
      const obj = JSON.parse(ob);
      this.car = obj;
    });
  }

  showNotification(type: any, title: any, message: any) {
    this.toastr.pop(type, title, message);
  }

  booking() {
    this.api.Booking({ car_id: this.id }).subscribe((res) => {
      console.log(res);
      const ob = JSON.stringify(res);
      const obj = JSON.parse(ob);
      if (obj.message === 'Already exist') {
        this.showNotification('error', 'Unauthorized', 'Car already reserved');
      } else {
        this.route.navigate(['/mycar']);
      }
    });
  }

  goToMyCar() {
    this.route.navigate(['/mycar']);
  }

  currency(e: any) {
    const format = parseFloat(e);

    const formattedValue = format.toLocaleString('pt-BR', {
      minimumFractionDigits: 3,
      style: 'currency',
      currency: 'BRL',
    });

    const value = formattedValue.replace(',', '.');
    return value;
  }
}
