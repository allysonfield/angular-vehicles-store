import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';
import { BranchComponent } from '../branch/branch.component';
import { CarsComponent } from '../cars/cars.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'branch',
        pathMatch: 'full',
      },
      {
        path: 'branch',
        component: BranchComponent,
      },
      {
        path: 'cars',
        component: CarsComponent,
      },
      {
        path: 'booking',
        component: BookingComponent,
      },
      {
        path: '**',
        redirectTo: 'branch',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
