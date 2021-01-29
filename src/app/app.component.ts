import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vehicles-store';

  public loading = false;

  constructor(private route: Router) {}

  goToMyCar() {
    this.route.navigate(['/mycar']);
  }

  public load(ld: any) {
    this.loading = ld;
  }
}
