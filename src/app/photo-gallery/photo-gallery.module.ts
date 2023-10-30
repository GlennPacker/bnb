import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryContainerComponent } from './components/photo-gallery-container/photo-gallery-container.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';


@NgModule({
  declarations: [
    PhotoGalleryContainerComponent,
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule
  ]
})
export class PhotoGalleryModule { }
