import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() logged = false;

  @Output() logoutEvent = new EventEmitter<string>();

  constructor(public route: Router, private app: AppComponent) {}

  ngOnInit(): void {}

  logOut() {
    localStorage.clear();
    this.app.logged = false;
    this.route.navigate(['/login']);
  }
}
