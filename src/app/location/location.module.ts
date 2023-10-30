import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationContainerComponent } from './components/location-container/location-container.component';
import { LocationComponent } from './components/location/location.component';


@NgModule({
  declarations: [
    LocationContainerComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
