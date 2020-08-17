import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagesfoundComponent,
    DashboardComponent,
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
