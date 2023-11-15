import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FieldPickerComponent } from './field-picker/field-picker.component';
import { FooterComponent } from './footer/footer.component';
import { GridImageComponent } from './grid-image/grid-image.component';
import { GridShieldComponent } from './grid-shield/grid-shield.component';
import { InputComponent } from './input/input.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';

@NgModule({
  declarations: [
    LocaleSwitcherComponent,
    InputComponent,
    CheckboxComponent,
    FieldPickerComponent,
    FooterComponent,
    GridImageComponent,
    GridShieldComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CheckboxComponent,
    FieldPickerComponent,
    FooterComponent,
    InputComponent,
    LocaleSwitcherComponent,
    GridImageComponent,
    GridShieldComponent
  ]
})
export class ComponentLibraryModule { }
