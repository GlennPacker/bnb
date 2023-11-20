import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CtaComponent } from './cta/cta.component';
import { FieldPickerComponent } from './field-picker/field-picker.component';
import { FooterComponent } from './footer/footer.component';
import { GridImageComponent } from './grid-image/grid-image.component';
import { GridShieldComponent } from './grid-shield/grid-shield.component';
import { InputComponent } from './input/input.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    LocaleSwitcherComponent,
    InputComponent,
    CheckboxComponent,
    FieldPickerComponent,
    FooterComponent,
    GridImageComponent,
    GridShieldComponent,
    CtaComponent,
    SearchBarComponent,
    SelectComponent,
    SearchBarComponent
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
    CtaComponent,
    FieldPickerComponent,
    FooterComponent,
    InputComponent,
    LocaleSwitcherComponent,
    GridImageComponent,
    GridShieldComponent,
    SearchBarComponent,
    SelectComponent
  ]
})
export class ComponentLibraryModule { }
