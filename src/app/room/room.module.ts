import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityComponent } from './components/facility/facility.component';
import { GridRoomComponent } from './components/grid-room/grid-room.component';
import { RoomContainerComponent } from './components/room-container/room-container.component';
import { RoomComponent } from './components/room/room.component';
import { RoomsContainerComponent } from './components/rooms-container/rooms-container.component';
import { RoomGridComponent } from './components/rooms-grid/room-grid.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomRoutingModule } from './room-routing.module';

@NgModule({
  declarations: [
    RoomComponent,
    RoomContainerComponent,
    RoomsComponent,
    RoomsContainerComponent,
    RoomGridComponent,
    GridRoomComponent,
    FacilitiesComponent,
    FacilityComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    CoreModule,
    StoreModule.forFeature('Room', {})
  ],
})
export class roomModule { }
