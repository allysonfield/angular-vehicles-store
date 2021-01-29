import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgImageSliderModule } from 'ng-image-slider';
import { TokenService } from 'src/app/services/token.service';

import { DashboardComponent } from './dashboard.component';
import { BranchComponent } from '../branch/branch.component';
import { CarsComponent } from '../cars/cars.component';
import { BookingComponent } from '../booking/booking.component';
import { ReservedComponent } from '../reserved/reserved.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  declarations: [
    DashboardComponent,
    BranchComponent,
    CarsComponent,
    BookingComponent,
    ReservedComponent,
  ],
  imports: [
    DashboardRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    NgImageSliderModule,
    FormsModule,
    HttpModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
