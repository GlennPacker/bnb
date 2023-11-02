import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ActivitiesContainerComponent } from './components/activities-container/activities-container.component';

const routes: Routes = [
  {
    path: '**',
    component: ActivitiesContainerComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('activities', {})
  ],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
