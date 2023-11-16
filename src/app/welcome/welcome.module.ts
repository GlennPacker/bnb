import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { WelcomeContainerComponent } from './components/welcome-container/welcome-container.component';
import { WelcomeGridComponent } from './components/welcome-grid/welcome-grid.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';


@NgModule({
  declarations: [
    WelcomeContainerComponent,
    WelcomeComponent,
    WelcomeGridComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
