import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesContainerComponent } from './components/activities-container/activities-container.component';
import { ActivitiesComponent } from './components/activities/activities.component';


@NgModule({
  declarations: [
    ActivitiesContainerComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
