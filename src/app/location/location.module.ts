import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { LocationContainerComponent } from './components/location-container/location-container.component';
import { LocationComponent } from './components/location/location.component';
import { LocationRoutingModule } from './location-routing.module';
import * as fromStore from './state';

@NgModule({
  declarations: [
    LocationContainerComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    LocationRoutingModule,
    EffectsModule.forFeature(fromStore.effects),
    StoreModule.forFeature('location', fromStore.locationsReducer)
  ]
})
export class LocationModule { }
