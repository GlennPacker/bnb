import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FieldPickerComponent } from './field-picker/field-picker.component';
import { InputComponent } from './input/input.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';

@NgModule({
  declarations: [
    LocaleSwitcherComponent,
    InputComponent,
    CheckboxComponent,
    FieldPickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CheckboxComponent,
    FieldPickerComponent,
    InputComponent,
    LocaleSwitcherComponent,
  ]
})
export class ComponentLibraryModule { }
