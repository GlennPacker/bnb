import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';

@NgModule({
  declarations: [
    LocaleSwitcherComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LocaleSwitcherComponent
  ]
})
export class ComponentLibraryModule { }
