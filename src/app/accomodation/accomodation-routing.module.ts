import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { RoomContainerComponent } from './components/room-container/room-container.component';

const routes: Route[] = [
  {
    path: ':id',
    component: RoomContainerComponent,
  },
  {
    path: '',
    component: AccommodationComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccommodationRoutingModule { }

export { routes }
