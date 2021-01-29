import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from 'src/app/services/api/authRoutes.service';

@Component({
  selector: 'app-mycar',
  templateUrl: './mycar.component.html',
  styleUrls: ['./mycar.component.scss'],
})
export class MycarComponent implements OnInit {
  booking: any;

  constructor(private api: RoutesService, public route: Router) {}

  ngOnInit(): void {
    this.api.MyCars().subscribe((res) => {
      console.log(res);
      const ob = JSON.stringify(res);
      const obj = JSON.parse(ob);
      this.booking = obj.rows;
    });
  }

  currency(e: any) {
    const format = parseFloat(e);
    const formattedValue = format.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formattedValue;
  }

  goToMyCar() {
    this.route.navigate(['/mycar']);
  }
}
