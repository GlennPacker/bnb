import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
     path: '',
     component: AppComponent
  },
  {
    path: 'accommodation',
    loadChildren: () => import('../accomodation/accomodation.module').then(m => m.AccomodationModule)
  },
  {
    path: 'photo-gallery',
    loadChildren: () => import('../photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule)
  },
  {
    path: 'location',
    loadChildren: () => import('../location/location.module').then(m => m.LocationModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('../activities/activities.module').then(m => m.ActivitiesModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes }