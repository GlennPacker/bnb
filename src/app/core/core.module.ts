import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ComponentLibraryModule } from '../component-library/component-library.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentLibraryModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    ComponentLibraryModule,
    MaterialModule
  ]
})
export class CoreModule { }
