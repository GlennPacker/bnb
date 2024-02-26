import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {})
  ],
  providers: [
   provideRouter(
    routes, 
    withComponentInputBinding()
  ),
   provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
