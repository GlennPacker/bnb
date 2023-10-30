import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { AccommodationRoutingModule as AccommodationRoutingModule } from './accomodation-routing.module';
import { RoomContainerComponent } from './components/room-container/room-container.component';
import { RoomComponent } from './components/room/room.component';

@NgModule({
  declarations: [
    AccommodationComponent,
    RoomContainerComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule
  ],
})
export class AccomodationModule { }
