import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesContainerComponent } from './components/activities-container/activities-container.component';

const routes: Routes = [
  {
    path: '**',
    component: ActivitiesContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
