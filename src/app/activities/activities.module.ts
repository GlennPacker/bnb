import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesContainerComponent } from './components/activities-container/activities-container.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import * as fromStore from './state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    ActivitiesContainerComponent,
    ActivitiesComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    ActivitiesRoutingModule,
    EffectsModule.forFeature(fromStore.effects),
    StoreModule.forFeature('activity', fromStore.activitiesReducer)
  ]
})
export class ActivitiesModule { }
