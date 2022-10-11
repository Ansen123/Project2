import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsdataComponent } from './usdata/usdata.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:UsdataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
RouterModule.forRoot(appRoutes),
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
