import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDoctorAppointmentComponent } from './bitsHealthcarePages/book-doctor-appointment/book-doctor-appointment.component';
import { BookLabAppointmentComponent } from './bitsHealthcarePages/book-lab-appointment/book-lab-appointment.component';
import { LandingPageComponent } from './bitsHealthcarePages/landing-page/landing-page.component';
import { loginComponent } from './bitsHealthcarePages/login/login.component';
import { OrderMedicinesComponent } from './bitsHealthcarePages/order-medicines/order-medicines.component';



const routes: Routes = [
  { path: '', component: loginComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'order-medicines', component: OrderMedicinesComponent },
  { path: 'book-lab-appointment', component: BookLabAppointmentComponent },
  { path: 'book-doctor-appointment', component: BookDoctorAppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
