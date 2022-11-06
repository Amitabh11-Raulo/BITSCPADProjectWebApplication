import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { BookDoctorAppointmentComponent } from './bitsHealthcarePages/book-doctor-appointment/book-doctor-appointment.component';
import { BookLabAppointmentComponent } from './bitsHealthcarePages/book-lab-appointment/book-lab-appointment.component';
import { OrderMedicinesComponent } from './bitsHealthcarePages/order-medicines/order-medicines.component';
import { loginComponent } from './bitsHealthcarePages/login/login.component';
import { LandingPageComponent } from './bitsHealthcarePages/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDoctorAppointmentComponent,
    BookLabAppointmentComponent,
    OrderMedicinesComponent,
    loginComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
