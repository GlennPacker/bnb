import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationContainerComponent } from './components/location-container/location-container.component';

const routes: Routes = [
  {
    path: '**',
    component: LocationContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
