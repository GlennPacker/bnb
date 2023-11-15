import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
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
  { 
    path: 'contact', 
    loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) 
  },
  { 
    path: 'booking', 
    loadChildren: () => import('../booking/booking.module').then(m => m.BookingModule) 
  },
  {
    path: '',
    loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { path: 'home', redirectTo: ''},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
