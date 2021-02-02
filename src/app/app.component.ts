import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vehicles-store';

  public loading = false;

  public logged = false;

  constructor(private route: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token@vehiclesstorage');
    if (!token) {
      this.logged = false;
    } else {
      this.logged = true;
    }
  }

  goToMyCar() {
    this.route.navigate(['/mycar']);
  }

  public load(ld: any) {
    this.loading = ld;
  }
}
