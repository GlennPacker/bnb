import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { AccommodationRoutingModule } from './accomodation-routing.module';
import { AccommodationContainerComponent } from './components/accommodation-container/accommodation-container.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { AccomodationGridComponent } from './components/accomodation-grid/accomodation-grid.component';
import { RoomContainerComponent } from './components/room-container/room-container.component';
import { RoomComponent } from './components/room/room.component';
import { GridRoomComponent } from './components/grid-room/grid-room.component';

@NgModule({
  declarations: [
    AccommodationComponent,
    RoomContainerComponent,
    RoomComponent,
    AccommodationContainerComponent,
    AccomodationGridComponent,
    GridRoomComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    CoreModule,
    StoreModule.forFeature('accommodation', {})
  ],
})
export class AccomodationModule { }
