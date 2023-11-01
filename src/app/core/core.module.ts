import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentLibraryModule } from '../component-library/component-library.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentLibraryModule,
    FormsModule,
  ],
  exports: [
    ComponentLibraryModule,
    MaterialModule
  ]
})
export class CoreModule { }
