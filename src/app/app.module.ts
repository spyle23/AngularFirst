import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import *as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    DashboardComponent,
    FaceSnapListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
