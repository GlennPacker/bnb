import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactContainerComponent } from './components/contact-container/contact-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactContainerComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    ContactRoutingModule,
    FormsModule, 
    ReactiveFormsModule 
  ]
})

export class ContactModule { }
