import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeContainerComponent } from './container/welcome-container/welcome-container.component';
import { WelcomeComponent } from './container/welcome/welcome.component';


@NgModule({
  declarations: [
    WelcomeContainerComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
