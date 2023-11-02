import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AccommodationRoutingModule } from './accomodation-routing.module';
import { AccommodationContainerComponent } from './components/accommodation-container/accommodation-container.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { RoomContainerComponent } from './components/room-container/room-container.component';
import { RoomComponent } from './components/room/room.component';

@NgModule({
  declarations: [
    AccommodationComponent,
    RoomContainerComponent,
    RoomComponent,
    AccommodationContainerComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    StoreModule.forFeature('accommodation', {})
  ],
})
export class AccomodationModule { }
