import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { BranchComponent } from './pages/branch/branch.component';
import { CarsComponent } from './pages/cars/cars.component';
import { LoginComponent } from './pages/login/login.component';
import { MycarComponent } from './pages/mycar/mycar.component';
import { RegisterComponent } from './pages/register/register.component';
import { SuccessComponent } from './pages/success/success.component';
import { ReservedComponent } from './pages/verification/reserved.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
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
    path: 'mycar',
    component: MycarComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'verification/:email/:verification_code/:token',
    component: ReservedComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
