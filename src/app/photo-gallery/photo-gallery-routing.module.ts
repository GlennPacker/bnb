import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryContainerComponent } from './components/photo-gallery-container/photo-gallery-container.component';

const routes: Routes = [
  {
    path: '**',
    component: PhotoGalleryContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoGalleryRoutingModule { }
