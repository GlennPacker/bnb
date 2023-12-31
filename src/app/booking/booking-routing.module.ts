import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingContainerComponent } from './component/booking-container/booking-container.component';

const routes: Routes = [
  { path: '', component: BookingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookingRoutingModule { }
