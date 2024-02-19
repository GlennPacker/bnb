import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AccommodationContainerComponent } from './components/accommodation-container/accommodation-container.component';
import { RoomContainerComponent } from './components/room-container/room-container.component';
import { accommodationListResolver, accommodationResolver } from './resolvers';

const routes: Route[] = [
  {
    path: ':id',
    component: RoomContainerComponent,
    resolve: { room: accommodationResolver },
  },
  {
    path: '',
    component: AccommodationContainerComponent,
    resolve: { accommodationList: accommodationListResolver },
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccommodationRoutingModule { }

export { routes };
