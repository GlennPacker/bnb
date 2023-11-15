import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { WelcomeGridComponent } from './components/welcome-grid/welcome-grid.component';
import { WelcomeContainerComponent } from './container/welcome-container/welcome-container.component';
import { WelcomeComponent } from './container/welcome/welcome.component';
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
