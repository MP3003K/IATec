import { LoginComponent } from './Estructura/login/login.component';
import { Herramienta2Component } from './components/Herramientas/herramienta2/herramienta2.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

import { Herramienta1Component } from './components/Herramientas/herramienta1/herramienta1.component';
import { BodyComponent } from './Estructura/body/body.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Herramienta3Component } from './components/Herramientas/herramienta3/herramienta3.component';
import { MatTableModule } from '@angular/material/table';
import { LayoutComponent } from './Estructura/layout/layout.component';
import { HeaderComponent } from './Estructura/header/header.component';
import { SidebarComponent } from './Estructura/sidebar/sidebar.component';
import { HomeComponent } from './Estructura/home/home.component';
import { FooterComponent } from './Estructura/footer/footer.component';
import { HighlightDirective } from './components/Herramientas/highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    Herramienta1Component,
    LoginComponent,
    BodyComponent,
    Herramienta3Component,
    Herramienta2Component,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
