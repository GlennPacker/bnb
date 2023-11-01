import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingContainerComponent } from './component/booking-container/booking-container.component';
import { BookingComponent } from './component/booking/booking.component';

@NgModule({
  declarations: [
    BookingComponent,
    BookingContainerComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})

export class BookingModule { }
