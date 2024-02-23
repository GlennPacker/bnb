import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RoomContainerComponent } from './components/room-container/room-container.component';
import { RoomsContainerComponent } from './components/rooms-container/rooms-container.component';
import { RoomListResolver } from './resolvers/room-list/roomList.resolver';
import { RoomResolver } from './resolvers/room/room.resolver';

const routes: Route[] = [
  {
    path: ':id',
    component: RoomContainerComponent,
    resolve: { room: RoomResolver },
  },
  {
    path: '',
    component: RoomsContainerComponent,
    resolve: { RoomList: RoomListResolver },
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomRoutingModule { }

export { routes };
