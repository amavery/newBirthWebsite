import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WhatToExpectComponent } from './views/what-to-expect/what-to-expect.component';
import { GetInvolvedComponent } from './views/get-involved/get-involved.component';
import { MediaComponent } from './views/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    WhatToExpectComponent,
    GetInvolvedComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
