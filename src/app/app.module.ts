import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatMenuModule } from '@angular/material/menu';
import { ToasterModule } from 'angular2-toaster';
import { MatIconModule } from '@angular/material/icon';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenService } from './services/token.service';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BranchComponent } from './pages/branch/branch.component';
import { CarsComponent } from './pages/cars/cars.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ReservedComponent } from './pages/verification/reserved.component';
import { MycarComponent } from './pages/mycar/mycar.component';
import { RegisterComponent } from './pages/register/register.component';
import { SuccessComponent } from './pages/success/success.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BranchComponent,
    CarsComponent,
    BookingComponent,
    ReservedComponent,
    MycarComponent,
    RegisterComponent,
    SuccessComponent,
    LoadingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    NgImageSliderModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
