import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule, routes } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './components/nav/nav.component';

import { provideRouter, withComponentInputBinding } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
   provideRouter(
    routes, 
    withComponentInputBinding()
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
